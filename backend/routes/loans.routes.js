import express from "express";
import LoanCtrl from "../api/loans.controller.js";

const router = express.Router();

router
  .route("/")
  .get(LoanCtrl.apiGetLoan)
  .post(LoanCtrl.apiPostLoan)
  .put(LoanCtrl.apiUpdateLoan)
  .delete(LoanCtrl.apiDeleteLoan);

export default router;
