import mongoose from "mongoose";

interface wishList {
  productName: String;
}

interface Product {
  name: String | mongoose.Types.ObjectId;
  price: Number | mongoose.Types.ObjectId;
}

export { Product, wishList };
