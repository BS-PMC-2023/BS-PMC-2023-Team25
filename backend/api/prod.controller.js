import ProdsDAO from "../dao/ProdsDAO.js";

export default class ProdController {
  static async apiPostProd(req, res, next) {
    try {
<<<<<<< HEAD
      console.log("enter in apiPostProd");
      console.log(req);

=======
>>>>>>> 7a0b7e12962ab821f6ab593a4484f2eaff4c0db1
      const name = req.body.name;
      const type = req.body.type;
      const Snumber = req.body.Snumber;
      const place = req.body.place;

      const ProdResponse = await ProdsDAO.addProd(name, type, Snumber, place);
      console.log(ProdResponse);

      var { error } = ProdResponse;
      if (error) {
        res.status(400).json({ error });
      } else {
        res.json({ status: "success" });
      }
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiUpdateProd(req, res, next) {
    try {
      const Snumber = req.body.Snumber;
      const place = req.body.place;
      console.log(Snumber);
      console.log(place);
      console.log(`apiUpdateProd fonction - req: ${req}`);

      const prodResponse = await ProdsDAO.updateProd(place, Snumber);
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

  static async apiDeleteProd(req, res, next) {
    try {
      const Snumber = req.query.Snumber;

      console.log(Snumber);

      const prodResponse = await ProdsDAO.deleteProd(Snumber); //MODIFIED FROM SOURCE FILES
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
