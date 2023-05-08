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

  static async addUser(email, password) {
    try {
      const userDoc = {
        email: email,
        password: password,
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
