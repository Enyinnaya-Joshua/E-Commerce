import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./route/user.route";

const appConfig = (app: Application) => {
  // MIDDLE-WARES
  app.use(express.json()).use(cors).use(morgan("dev"));

  // ROUTER
  app.use("api/auth", router);
};
