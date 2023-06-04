import express from "express";

import StudioCtrl from "../api/studio.controller.js";

const router = express.Router();

router
  .route("/")
  .get(StudioCtrl.apiGetStudio)
  .post(StudioCtrl.apiPostStudio)
  .put(StudioCtrl.apiUpdateStudio)
  .delete(StudioCtrl.apiDeleteStudio);

export default router;
