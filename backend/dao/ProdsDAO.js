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

  static async addProd(name, type, Snumber, place, repair) {
    try {
      const prodDoc = {
        name: name,
        type: type,
        Snumber: Snumber,
        place: place,
        repair: repair,
      };
      return await prods.insertOne(prodDoc);
    } catch (e) {
      console.error(`Unable to post review: ${e}`);
      return { error: e };
    }
  }

  static async updateProd(place, Snumber) {
    try {
      console.log(Snumber, place);

      const updateResponse = await prods.updateOne(
        { Snumber: Snumber },
        { $set: { place: place } }
      );
      console.log("ici", updateResponse);
      return updateResponse;
    } catch (e) {
      console.error(`Unable to update product: ${e}`);
      return { error: e };
    }
  }

  static async updateProdRepair(repair, Snumber) {
    try {
      console.log(Snumber, repair);

      const updateResponse = await prods.updateOne(
        { Snumber: Snumber },
        { $set: { repair: repair } }
      );
      console.log("repair", updateResponse);
      return updateResponse;
    } catch (e) {
      console.error(`Unable to update product: ${e}`);
      return { error: e };
    }
  }

  static async deleteProd(Snumber) {
    try {
      console.log(Snumber);
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
