import express from "express";
import OpinionCtrl from "../api/opinions.controller.js";

const router = express.Router();

router
  .route("/")
  .get(OpinionCtrl.apiGetOpinion)
  .post(OpinionCtrl.apiPostOpinion)
  .put(OpinionCtrl.apiUpdateOpinion)
  .delete(OpinionCtrl.apiDeleteOpinion);

export default router;
