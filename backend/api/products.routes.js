import express from "express";
import ProductsCtrl from "./products.controller.js";
import ProdCtrl from "./prod.controller.js";
import UserCtrl from "./users.controller.js";
import PodcastCtrl from "./podcasts.controller.js";

const router = express.Router();

router.route("/products").get(ProductsCtrl.apiGetProducts); //example of route

router
  .route("/manager")
  .post(ProdCtrl.apiPostProd)
  .put(ProdCtrl.apiUpdateProd)
  .delete(ProdCtrl.apiDeleteProd);

router
  .route("/users")
  .post(UserCtrl.apiPostUser)
  .put(UserCtrl.apiUpdateUser)
  .delete(UserCtrl.apiDeleteUser);

router
  .route("/podcast")
  .get(PodcastCtrl.apiGetPodcasts)
  .post(PodcastCtrl.apiPostPodcast)
  .put(PodcastCtrl.apiUpdatePodcast)
  .delete(PodcastCtrl.apiDeletePodcast);

export default router;
