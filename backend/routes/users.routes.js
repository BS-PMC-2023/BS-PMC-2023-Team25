import express from "express";
import UserCtrl from "../api/users.controller.js";

const router = express.Router();

router
  .route("/")
  .get(UserCtrl.apiGetUsers)
  .post(UserCtrl.apiPostUser)
  .put(UserCtrl.apiUpdateUser)
  .delete(UserCtrl.apiDeleteUser);

router.route("/login").post(UserCtrl.apiLoginUser);

export default router;
