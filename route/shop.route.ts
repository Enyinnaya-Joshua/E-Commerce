import { Router } from "express";
import {
  storeProducts,
  singleStoreproduct,
} from "../controller/shop.controller";

const router = Router();

router.route("/shop").get(storeProducts);
router.route("/shop/:id").get(singleStoreproduct);

export default router;
