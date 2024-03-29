import express from "express";
import ProdCtrl from "../api/prod.controller.js";

const router = express.Router();

router
  .route("/")
  .post(ProdCtrl.apiPostProd)
  .put(ProdCtrl.apiUpdateProd)
  .put(ProdCtrl.apiUpdateProdRepair)

  .delete(ProdCtrl.apiDeleteProd);

export default router;
