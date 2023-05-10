import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let prods;

export default class ProdsDAO {
  static async injectDB(conn) {
    if (prods) {
      return;
    }
    try {
      prods = await conn.db(process.env.MYAPP_NS).collection("products");
      console.log(prods);
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`);
    }
  }

  static async addProd(name, type, Snumber, place) {
    try {
      const prodDoc = {
        name: name,
        type: type,
        Snumber: Snumber,
        place: place,
      };
      return await prods.insertOne(prodDoc);
    } catch (e) {
      console.error(`Unable to post review: ${e}`);
      return { error: e };
    }
  }

  static async updateProd(Snumber, place) {
    try {
      const updateResponse = await prods.updateOne(
        { Snumber: Snumber },
        { $set: { place: place } }
      );

      return updateResponse;
    } catch (e) {
      console.error(`Unable to update product: ${e}`);
      return { error: e };
    }
  }

  static async deleteProd(Snumber) {
    try {
      const deleteResponse = await prods.deleteOne({
        Snumber: Snumber,
      });
      return deleteResponse;
    } catch (e) {
      console.error(`Unable to delete product: ${e}`);
      return { error: e };
    }
  }
}
