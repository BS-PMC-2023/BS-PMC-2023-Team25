import mongodb from "mongodb";
const ObjectId = mongodb.ObjectID;
let loans;

export default class LoansDAO {
  static async injectDB(conn) {
    if (loans) {
      return;
    }
    try {
      loans = await conn.db(process.env.MYAPP_NS).collection("loans");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in LoansDAO: ${e}`
      );
    }
  }
  static async getLoans({
    filters = null,
    page = 0,
    loansPerPage = 20,
  } = {}) {
    let query;
    if (filters) {
      if ("product_sn" in filters) {
        query = { "product_sn": { $eq: filters["product_sn"] } }
      }
    }

      let cursor;

      try {
        cursor = await loans.find(query);
      } catch (e) {
        console.error(`Unable to issue find command, ${e}`);
        return { loansList: [], totalNumLoans: 0 }; // si erreur
      }

      const displayCursor = cursor
        .limit(loansPerPage)
        .skip(loansPerPage * page);

      try {
        const loansList = await displayCursor.toArray();
        const totalNumLoans = await loans.countDocuments(query);

        return { loansList, totalNumLoans };
      } catch (e) {
        console.error(
          `Unable to convert cursor to array or problem counting documents, ${e}`
        );
        return { loansList: [], totalNumLoans: 0 }; // si erreur
      }
    }
  }

