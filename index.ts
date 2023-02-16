import express, { Application, Response, Request } from "express";
import dbConnection from "./config/db";
import cors from "cors";
import morgan from "morgan";
import UserProduct from "./route/product.route";
import userRoute from "./route/user.route";
import CreateProduct from "./route/product.route";
import Shop from "./route/shop.route";
const port: number = 2023;

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "server is up and running",
  });
});

dbConnection();

app
  .use(express.json())
  .use(cors())
  .use(morgan("dev"))
  .use("/api/", UserProduct)
  .use("/api/auth/", userRoute)
  .use("/api/", CreateProduct)
  .use("/api/", Shop);

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
