import { Document, Schema, model } from "mongoose";
import { Product } from "../interfaces/interfaces";

interface userProduct extends Product, Document {}

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "please enter product name"],
    },
    price: {
      type: Number,
      require: [true, "please enter product amount"],
    },
  },
  {
    timestamps: true,
  }
);

const UserProduct = model<userProduct>("products", ProductSchema);

export default UserProduct;
