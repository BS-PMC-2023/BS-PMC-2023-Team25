import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let studios;

export default class StudioDAO {
  static async injectDB(conn) {
    if (studios) {
      return;
    }
    try {
      studios = await conn.db(process.env.MYAPP_NS).collection("studio");
      console.log(studios);
    } catch (e) {
      console.error(
        `Unable to establish collection handles in studioDAO: ${e}`
      );
    }
  }

  static async addStudios(date, dateRet, email, snum) {
    try {
      const studioDoc = {
        date: date,
        dateRet: dateRet,

        email: email,
        snum: snum,
      };
      console.log(studioDoc);
      return await studios.insertOne(studioDoc);
    } catch (e) {
      console.error(`Unable to post opinion: ${e}`);
      return { error: e };
    }
  }

  static async updateStudios(Snum) {
    try {
      const updateResponse = await studios.updateOne(
        { Snum: Snum },
        { $set: { email: email } }
      );

      return updateResponse;
    } catch (e) {
      console.error(`Unable to update snum: ${e}`);
      return { error: e };
    }
  }

  static async deleteStudios(snum) {
    try {
      const deleteResponse = await studios.deleteOne({
        snum: snum,
      });
      console.log(snum);
      return deleteResponse;
    } catch (e) {
      console.error(`Unable to delete snum: ${e}`);
      return { error: e };
    }
  }
  static async getStudios({
    filters = null,
    page = 0,
    studiosPerPage = 100,
  } = {}) {
    let query;
    if (filters) {
      if ("snum" in filters) {
        query = { $text: { $search: filters["snum"] } };
      }

      let cursor;

      try {
        cursor = await studios.find(query);
      } catch (e) {
        console.error(`Unable to issue find command, ${e}`);
        return { studiosList: [], totalNumStudios: 0 }; // si erreur
      }

      const displayCursor = cursor
        .limit(studiosPerPage)
        .skip(studiosPerPage * page);

      try {
        const studiosList = await displayCursor.toArray();

        return { studiosList };
      } catch (e) {
        console.error(
          `Unable to convert cursor to array or problem counting documents, ${e}`
        );

        return { studiosList: [], totalNumStudioss: 0 }; // si erreur
      }
    }
  }
}
