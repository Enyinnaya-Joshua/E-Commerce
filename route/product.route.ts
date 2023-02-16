import { Router } from "express";
import {
  Products,
  singelProduct,
  CreateProduct,
} from "../controller/product.controller";

const router = Router();

router.route("/products").get(Products);
router.route("/product/:id").get(singelProduct);
router.route("/create-product").post(CreateProduct);

export default router;
