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
      console.log(users);
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`);
    }
  }

  static async addUser(email, username, password, type) {
    try {
      const userDoc = {
        email: email,
        username: username,
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
      console.log(email);
      return deleteResponse;
    } catch (e) {
      console.error(`Unable to delete user: ${e}`);
      return { error: e };
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
}
