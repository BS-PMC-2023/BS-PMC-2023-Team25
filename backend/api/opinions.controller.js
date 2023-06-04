<<<<<<< HEAD
import OpinionDAO from "./dao/OpinionDAO.js";

export default class OpinionsController {
  static async apiGetOpinion(req, res, next) {
    const opinionPerPage = req.query.opinionPerPage
      ? parseInt(req.query.opinionPerPage, 10)
      : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    let filters = {};
    if (req.query.email) {
      filters.email = req.query.email;
    }

    const { opinionsList } = await OpinionDAO.getOpinion({
      filters,
      page,
    });

    let response = {
      opinions: opinionsList,
    };
    res.json(response);
  }

  static async apiPostOpinion(req, res, next) {
    try {
      const email = req.body.email;
      const bodyMes = req.body.bodyMes;

      console.log(email);
      const date = new Date();
      const OpinionResponse = await OpinionDAO.addOpinion(bodyMes, email, date);
      console.log(OpinionResponse);

      var { error } = OpinionResponse;
      if (error) {
        res.status(400).json({ error });
      } else {
        res.json({ status: "success" });
      }
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiUpdateOpinion(req, res, next) {
    try {
      const email = req.body.email;
      const bodyMes = req.body.bodyMes;
      const date = new Date();
      const OpinionResponse = await OpinionDAO.updateOpinion(
        email,
        bodyMes,
        date
      );
      console.log(OpinionResponse);
      var { error } = OpinionResponse;
      if (error) {
        res.status(400).json({ error });
      }

      if (OpinionResponse.modifiedCount === 0) {
        throw new Error(
          "unable to update prod - user may not be original poster"
        );
      }

      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  static async apiDeleteOpinion(req, res, next) {
    try {
      const email = req.query.email;
      const opinionResponse = await OpinionDAO.deleteOpinion(email);
      console.log(bodyMes); //MODIFIED FROM SOURCE FILES
      var { error } = opinionResponse;
      if (error) {
        res.status(400).json({ error });
      }

      if (opinionResponse.deletedCount === 0) {
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
=======
import OpinionDAO from "../dao/OpinionDAO.js";

export default class OpinionsController {
  static async apiGetOpinion(req, res, next) {
    const opinionPerPage = req.query.opinionPerPage
      ? parseInt(req.query.opinionPerPage, 10)
      : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    let filters = {};
    if (req.query.email) {
      filters.email = req.query.email;
    }

    const { opinionsList } = await OpinionDAO.getOpinion({
      filters,
      page,
    });

    let response = {
      opinions: opinionsList,
    };
    res.json(response);
  }

  static async apiPostOpinion(req, res, next) {
    try {
      const email = req.body.email;
      const bodyMes = req.body.bodyMes;

      console.log(email);
      const date = new Date();
      const OpinionResponse = await OpinionDAO.addOpinion(bodyMes, email, date);
      console.log(OpinionResponse);

      var { error } = OpinionResponse;
      if (error) {
        res.status(400).json({ error });
      } else {
        res.json({ status: "success" });
      }
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiUpdateOpinion(req, res, next) {
    try {
      const email = req.body.email;
      const bodyMes = req.body.bodyMes;
      const date = new Date();
      const OpinionResponse = await OpinionDAO.updateOpinion(
        email,
        bodyMes,
        date
      );
      console.log(OpinionResponse);
      var { error } = OpinionResponse;
      if (error) {
        res.status(400).json({ error });
      }

      if (OpinionResponse.modifiedCount === 0) {
        throw new Error(
          "unable to update prod - user may not be original poster"
        );
      }

      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  static async apiDeleteOpinion(req, res, next) {
    try {
      const email = req.query.email;
      const opinionResponse = await OpinionDAO.deleteOpinion(email);
      console.log(bodyMes); //MODIFIED FROM SOURCE FILES
      var { error } = opinionResponse;
      if (error) {
        res.status(400).json({ error });
      }

      if (opinionResponse.deletedCount === 0) {
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
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a
