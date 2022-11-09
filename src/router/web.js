import express from "express";
import homeController from "../controller/homeController";
const router = express.Router();

const initWebRouter = (app) => {
  router.get("/aaa", homeController.handle);
  return app.use("/", router);
};

export default initWebRouter;
