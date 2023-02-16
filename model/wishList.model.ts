import mongoose, { Document, Schema, model } from "mongoose";
import { wishList } from "../utils/interfaces";

interface WishList extends wishList, Document {}

const WishSchema = new Schema(
  {
    Product: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const UserWishList = model<WishList>("userWishList", WishSchema);

export default UserWishList;
