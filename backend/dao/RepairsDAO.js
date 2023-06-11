import mongodb from "mongodb";
const ObjectId = mongodb.ObjectID;
let repairs;

export default class RepairsDAO {
  static async injectDB(conn) {
    if (repairs) {
      return;
    }
    try {
      repairs = await conn.db(process.env.MYAPP_NS).collection("repairs");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in RepairsDAO: ${e}`
      );
    }
  }
  static async getRepairs({
    filters = null,
    page = 0,
    repairsPerPage = 20,
  } = {}) {
    let query;
    if (filters) {
      if ("product_sn" in filters) {
        query = { product_sn: { $eq: filters["product_sn"] } };
      }
    }

    let cursor;

    try {
      cursor = await repairs.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { repairsList: [], totalNumRepairs: 0 }; // si erreur
    }

    const displayCursor = cursor
      .limit(repairsPerPage)
      .skip(repairsPerPage * page);

    try {
      const repairsList = await displayCursor.toArray();
      const totalNumRepairs = await repairs.countDocuments(query);

      return { repairsList, totalNumRepairs };
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return { repairsList: [], totalNumRepairs: 0 }; // si erreur
    }
  }

  static async addRepair(Snumber, repair) {
    try {
      const repairDoc = {
        Snumber: Snumber,
        repair: repair,
      };
      return await repairs.insertOne(repairDoc);
    } catch (e) {
      console.error(`Unable to post review: ${e}`);
      return { error: e };
    }
  }

  static async updateRepair(repair, Snumber) {
    try {
      console.log(Snumber, repair);

      const updateResponse = await repairs.updateOne(
        { Snumber: Snumber },
        { $set: { repair: repair } }
      );
      return updateResponse;
    } catch (e) {
      console.error(`Unable to update product: ${e}`);
      return { error: e };
    }
  }

  static async deleteRepair(Snumber) {
    try {
      console.log(Snumber);
      const deleteResponse = await repairs.deleteOne({
        Snumber: Snumber,
      });
      return deleteResponse;
    } catch (e) {
      console.error(`Unable to delete product: ${e}`);
      return { error: e };
    }
  }
}
