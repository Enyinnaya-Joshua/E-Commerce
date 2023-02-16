import mongoose, { Document, Schema, model } from "mongoose";
import { Product } from "../interfaces/interfaces";

interface ProductStore {
  Product: any[];
  user: any[];
}

interface VendorStore extends ProductStore, Document {}

const StoreSchema = new Schema(
  {
    product: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
      },
    ],

    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const ProductStore = model<VendorStore>("VendorStore", StoreSchema);

export default ProductStore;
