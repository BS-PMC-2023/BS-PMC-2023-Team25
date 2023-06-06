import RepairsDAO from "../dao/RepairsDAO.js";

export default class RepairsController {
  static async apiGetRepair(req, res, next) {
    const repairsPerPage = req.query.repairsPerPage
      ? parseInt(req.query.repairsPerPage, 10)
      : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    let filters = {};
    if (req.query.product_sn) {
      filters.product_sn = req.query.product_sn;
    }

    const { repairsList, totalNumRepairs } = await RepairsDAO.getRepairs({
      filters,
      page,
      repairsPerPage,
    });

    let response = {
      repairs: repairsList,
      page: page,
      filters: filters,
      entries_per_page: repairsPerPage,
      total_results: totalNumRepairs,
    };
    res.json(response);
  }

  static async apiPostRepair(req, res, next) {
    try {
      console.log("enter in apiPostRepair");
      console.log(req);
      const Snumber = req.body.Snumber;
      const repair = req.body.repair;

      const RepairResponse = await RepairsDAO.addRepair(Snumber, repair);
      console.log(RepairResponse);

      var { error } = RepairResponse;
      if (error) {
        res.status(400).json({ error });
      } else {
        res.json({ status: "success" });
      }
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiUpdateRepair(req, res, next) {
    try {
      const Snumber = req.body.Snumber;
      const acc = req.body.repair;
      const prodResponse = await RepairsDAO.updateRepair(repair, Snumber);
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

  static async apiDeleteRepair(req, res, next) {
    try {
      const Snumber = req.query.Snumber;
      const prodResponse = await RepairsDAO.deleteRepair(Snumber); //MODIFIED FROM SOURCE FILES
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
