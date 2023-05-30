import express from "express";
import ProductsCtrl from "../api/products.controller.js";

const router = express.Router();

router.route("/products")
  .get(ProductsCtrl.apiGetProducts);

export default router;
