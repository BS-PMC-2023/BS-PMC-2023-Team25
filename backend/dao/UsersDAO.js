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
  static async getUsers({
    filters = null,
    page = 0,
    usersPerPage = 20,
  } = {}) {
    let query;
    if (filters) {
      if ("email" in filters) {
        query = { $text: { $search: filters["email"] } }
      }
    }

      let cursor;

      try {
        cursor = await users.find(query);
      } catch (e) {
        console.error(`Unable to issue find command, ${e}`);
        return { usersList: [], totalNumUsers: 0 }; // si erreur
      }

      const displayCursor = cursor
        .limit(usersPerPage)
        .skip(usersPerPage * page);

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
  }