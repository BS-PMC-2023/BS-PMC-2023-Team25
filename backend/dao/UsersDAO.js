import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let users;
export default class UsersDAO {
  static async injectDB(conn) {
    if (users) {
      return;
    }
    try {
      users = await conn.db(process.env.MYAPP_NS).collection("users");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in UsersDAO: ${e}`
      );
    }
  }
  static async getUsers({ filters = null, page = 0, usersPerPage = 20 } = {}) {
    let query;
    if (filters) {
      if ("email" in filters) {
        query = { $text: { $search: filters["email"] } };
      }
    }

    let cursor;

    try {
      cursor = await users.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { usersList: [], totalNumUsers: 0 }; // si erreur
    }

    const displayCursor = cursor.limit(usersPerPage).skip(usersPerPage * page);

    try {
      const usersList = await displayCursor.toArray();
      const totalNumUsers = await users.countDocuments(query);

      return { usersList, totalNumUsers };
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return { usersList: [], totalNumUsers: 0 }; // si erreur
    }
  }

  static async login(email, password) {
    try {
      const user = await users.findOne({ email: email });

      if (!user) {
        throw new Error("User not found.");
      }

      const isValidPassword = user.password === password;

      if (!isValidPassword) {
        throw new Error("Invalid password.");
      }

      return user;
    } catch (e) {
      console.error(`Unable to login user: ${e}`);
      return { error: e };
    }
  }

  static async addUser(email, password, type) {
    try {
      const userDoc = {
        email: email,
        password: password,
        type: type,
      };
      console.log(userDoc);
      return await users.insertOne(userDoc);
    } catch (e) {
      console.error(`Unable to post user: ${e}`);
      return { error: e };
    }
  }

  static async updateUser(email, password) {
    try {
      const updateResponse = await users.updateOne(
        { email: email },
        { $set: { password: password } }
      );

      return updateResponse;
    } catch (e) {
      console.error(`Unable to update product: ${e}`);
      return { error: e };
    }
  }

  static async deleteUser(email) {
    try {
      const deleteResponse = await users.deleteOne({
        email: email,
      });
      return deleteResponse;
    } catch (e) {
      console.error(`Unable to delete product: ${e}`);
      return { error: e };
    }
  }
}
