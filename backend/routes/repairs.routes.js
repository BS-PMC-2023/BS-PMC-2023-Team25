import express from "express";
import RepairCtrl from "../api/repairs.controller.js";

const router = express.Router();

router
  .route("/")
  .get(RepairCtrl.apiGetRepair)
  .post(RepairCtrl.apiPostRepair)
  .put(RepairCtrl.apiUpdateRepair)
  .delete(RepairCtrl.apiDeleteRepair);

export default router;
