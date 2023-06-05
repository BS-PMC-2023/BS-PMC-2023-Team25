import StudioDAO from "../dao/StudioDAO.js";

export default class StudioController {
  static async apiGetStudio(req, res, next) {
    const studioPerPage = req.query.studioPerPage
      ? parseInt(req.query.studioPerPage, 10)
      : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    let filters = {};
    if (req.query.snum) {
      filters.snum = req.query.snum;
    }

    const { studiosList } = await StudioDAO.getStudios({
      filters,
      page,
    });

    let response = {
      studios: studiosList,
    };
    res.json(response);
  }

  static async apiPostStudio(req, res, next) {
    try {
      const date = req.body.date;
      const email = req.body.email;
      const Snum = req.body.Snum;

      console.log(Snum);

      const StudioResponse = await StudioDAO.addStudios(date, email, Snum);
      console.log(StudioResponse);

      var { error } = StudioResponse;
      if (error) {
        res.status(400).json({ error });
      } else {
        res.json({ status: "success" });
      }
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiUpdateStudio(req, res, next) {
    try {
      const email = req.body.email;
      const snum = req.body.snum;
      const date = new Date();
      const StudioResponse = await StudioDAO.updateStudios(date, email, snum);
      console.log(StudioResponse);
      var { error } = StudioResponse;
      if (error) {
        res.status(400).json({ error });
      }

      if (StudioResponse.modifiedCount === 0) {
        throw new Error(
          "unable to update prod - user may not be original poster"
        );
      }

      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  static async apiDeleteStudio(req, res, next) {
    try {
      const snum = req.body.snum;

      const studioResponse = await StudioDAO.deleteStudios(snum);
      console.log(bodyMes); //MODIFIED FROM SOURCE FILES
      var { error } = studioResponse;
      if (error) {
        res.status(400).json({ error });
      }

      if (studioResponse.deletedCount === 0) {
        throw new Error(
          "unable to delete user - this user does not exist or user_id not correspond to request creator"
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
