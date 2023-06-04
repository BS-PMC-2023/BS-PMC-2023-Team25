<<<<<<< HEAD
import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let opinions;

export default class OpinionDAO {
  static async injectDB(conn) {
    if (opinions) {
      return;
    }
    try {
      opinions = await conn.db(process.env.MYAPP_NS).collection("opinion");
      console.log(opinions);
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`);
    }
  }

  static async addOpinion(email, bodyMes, date) {
    try {
      const opinionDoc = {
        email: email,
        bodyMes: bodyMes,
        date: date,
      };
      console.log(opinionDoc);
      return await opinions.insertOne(opinionDoc);
    } catch (e) {
      console.error(`Unable to post opinion: ${e}`);
      return { error: e };
    }
  }

  static async updateOpinion(email, bodyMes, date) {
    try {
      const updateResponse = await opinions.updateOne(
        { email: email },
        { $set: { bodyMes: bodyMes, date: date } }
      );

      return updateResponse;
    } catch (e) {
      console.error(`Unable to update bodyMes: ${e}`);
      return { error: e };
    }
  }

  static async deleteOpinion(bodyMes) {
    try {
      const deleteResponse = await opinions.deleteOne({
        bodyMes: bodyMes,
      });
      console.log(bodyMes);
      return deleteResponse;
    } catch (e) {
      console.error(`Unable to delete opinion: ${e}`);
      return { error: e };
    }
  }
  static async getOpinion({
    filters = null,
    page = 0,
    opinionsPerPage = 100,
  } = {}) {
    let query;
    if (filters) {
      if ("email" in filters) {
        query = { $text: { $search: filters["email"] } };
      }

      let cursor;

      try {
        cursor = await opinions.find(query);
      } catch (e) {
        console.error(`Unable to issue find command, ${e}`);
        return { opinionsList: [], totalNumOpinions: 0 }; // si erreur
      }

      const displayCursor = cursor
        .limit(opinionsPerPage)
        .skip(opinionsPerPage * page);

      try {
        const opinionsList = await displayCursor.toArray();

        return { opinionsList };
      } catch (e) {
        console.error(
          `Unable to convert cursor to array or problem counting documents, ${e}`
        );

        return { opinionsList: [], totalNumOpinions: 0 }; // si erreur
      }
    }
  }
}
=======
import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let opinions;

export default class OpinionDAO {
  static async injectDB(conn) {
    if (opinions) {
      return;
    }
    try {
      opinions = await conn.db(process.env.MYAPP_NS).collection("opinion");
      console.log(opinions);
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`);
    }
  }

  static async addOpinion(email, bodyMes, date) {
    try {
      const opinionDoc = {
        email: email,
        bodyMes: bodyMes,
        date: date,
      };
      console.log(opinionDoc);
      return await opinions.insertOne(opinionDoc);
    } catch (e) {
      console.error(`Unable to post opinion: ${e}`);
      return { error: e };
    }
  }

  static async updateOpinion(email, bodyMes, date) {
    try {
      const updateResponse = await opinions.updateOne(
        { email: email },
        { $set: { bodyMes: bodyMes, date: date } }
      );

      return updateResponse;
    } catch (e) {
      console.error(`Unable to update bodyMes: ${e}`);
      return { error: e };
    }
  }

  static async deleteOpinion(bodyMes) {
    try {
      const deleteResponse = await opinions.deleteOne({
        bodyMes: bodyMes,
      });
      console.log(bodyMes);
      return deleteResponse;
    } catch (e) {
      console.error(`Unable to delete opinion: ${e}`);
      return { error: e };
    }
  }
  static async getOpinion({
    filters = null,
    page = 0,
    opinionsPerPage = 100,
  } = {}) {
    let query;
    if (filters) {
      if ("email" in filters) {
        query = { $text: { $search: filters["email"] } };
      }

      let cursor;

      try {
        cursor = await opinions.find(query);
      } catch (e) {
        console.error(`Unable to issue find command, ${e}`);
        return { opinionsList: [], totalNumOpinions: 0 }; // si erreur
      }

      const displayCursor = cursor
        .limit(opinionsPerPage)
        .skip(opinionsPerPage * page);

      try {
        const opinionsList = await displayCursor.toArray();

        return { opinionsList };
      } catch (e) {
        console.error(
          `Unable to convert cursor to array or problem counting documents, ${e}`
        );

        return { opinionsList: [], totalNumOpinions: 0 }; // si erreur
      }
    }
  }
}
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a
