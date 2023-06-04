import mongodb from "mongodb";
const ObjectId = mongodb.ObjectID;
let products;

export default class ProductsDAO {
  static async injectDB(conn) {
    if (products) {
      return;
    }
    try {
      products = await conn.db(process.env.MYAPP_NS).collection("products");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in ProductsDAO: ${e}`
      );
    }
  }
  static async getProducts({
    filters = null,
    page = 0,
    productsPerPage = 100,
  } = {}) {
    let query;
    if (filters) {
      if ("name" in filters) {
        query = { $text: { $search: filters["name"] } };
      } else if ("Snumber" in filters) {
        query = { Snumber: { $eq: filters["Snumber"] } };
      }
    }

    let cursor;

    try {
      cursor = await products.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { productsList: [], totalNumProducts: 0 }; // si erreur
    }

    const displayCursor = cursor
      .limit(productsPerPage)
      .skip(productsPerPage * page);

    try {
      const productsList = await displayCursor.toArray();

      return { productsList };
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return { productsList: [], totalNumProducts: 0 }; // si erreur
    }
  }
}
