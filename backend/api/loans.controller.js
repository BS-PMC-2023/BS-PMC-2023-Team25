import LoansDAO from "../dao/LoansDAO.js";

export default class LoansController {
  static async apiGetLoan(req, res, next) {
    const loansPerPage = req.query.loansPerPage
      ? parseInt(req.query.loansPerPage, 10)
      : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    let filters = {};
    if (req.query.product_sn) {
      filters.product_sn = req.query.product_sn;
    }

    const { loansList, totalNumLoans } = await LoansDAO.getLoans({
      filters,
      page,
      loansPerPage,
    });

    let response = {
      loans: loansList,
      page: page,
      filters: filters,
      entries_per_page: loansPerPage,
      total_results: totalNumLoans,
    };
    res.json(response);
  }

  static async apiPostLoan(req, res, next) {
    try {
      console.log("enter in apiPostLoan");
      console.log(req);
      const email = req.body.email;

      const name = req.body.name;
      const type = req.body.type;
      const Snumber = req.body.Snumber;
      const acc = req.body.acc;

      console.log(name);

      const LoanResponse = await LoansDAO.addLoan(
        email,
        name,
        type,
        Snumber,
        acc
      );
      console.log(LoanResponse);

      var { error } = LoanResponse;
      if (error) {
        res.status(400).json({ error });
      } else {
        res.json({ status: "success" });
      }
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiUpdateLoan(req, res, next) {
    try {
      const Snumber = req.body.Snumber;
      const acc = req.body.acc;
      const prodResponse = await LoansDAO.updateLoan(acc, Snumber);
      console.log(prodResponse);
      var { error } = prodResponse;
      if (error) {
        res.status(400).json({ error });
      }

      if (prodResponse.modifiedCount === 0) {
        throw new Error(
          "unable to update prod - user may not be original poster"
        );
      }

      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiDeleteLoan(req, res, next) {
    try {
      const Snumber = req.query.Snumber;
      const prodResponse = await LoansDAO.deleteLoan(Snumber); //MODIFIED FROM SOURCE FILES
      var { error } = prodResponse;
      if (error) {
        res.status(400).json({ error });
      }

      if (prodResponse.deletedCount === 0) {
        throw new Error(
          "unable to delete product - this product does not exist or user_id not correspond to request creator"
        );
      } else {
        res.json({ status: "sucess!!" });
      }
    } catch (e) {
      console.log(e);
      res.json({ error: e.message }).status(500);
    }
  }
}
