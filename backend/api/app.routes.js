import express from "express";
import ProductsCtrl from "./products.controller.js";
const router = express.Router();

router.route("/").get(ProductsCtrl.apiGetProducts); //example of route

export default router;
