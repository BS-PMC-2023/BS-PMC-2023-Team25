import express from "express";
import ProductsCtrl from "./products.controller.js";
import ProdCtrl from "./prod.controller.js";
import UserCtrl from "./users.controller.js";
import PodcastCtrl from "./podcasts.controller.js";
import OpinionCtrl from "./opinions.controller.js";
import StudioCtrl from "./studio.controller.js";
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

router.route("/login").get(UserCtrl.apiLoginUser);
router
  .route("/podcast")
  .get(PodcastCtrl.apiGetPodcasts)
  .post(PodcastCtrl.apiPostPodcast)
  .put(PodcastCtrl.apiUpdatePodcast)
  .delete(PodcastCtrl.apiDeletePodcast);

router
  .route("/opinion")
  .get(OpinionCtrl.apiGetOpinion)
  .post(OpinionCtrl.apiPostOpinion)
  .put(OpinionCtrl.apiUpdateOpinion)
  .delete(OpinionCtrl.apiDeleteOpinion);

router
  .route("/studio")
  .get(StudioCtrl.apiGetStudio)
  .post(StudioCtrl.apiPostStudio)
  .put(StudioCtrl.apiUpdateStudio)
  .delete(StudioCtrl.apiDeleteStudio);

export default router;
