import express from "express";
import PodcastCtrl from "../api/podcasts.controller.js";

const router = express.Router();

router
  .route("/")
  .get(PodcastCtrl.apiGetPodcasts)
  .post(PodcastCtrl.apiPostPodcast)
  .put(PodcastCtrl.apiUpdatePodcast)
  .delete(PodcastCtrl.apiDeletePodcast);

export default router;
