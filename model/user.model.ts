import mongoose, { Document, model, Schema } from "mongoose";

interface UserData {
  fullname: string;
  email: string;
  password: string;
  wishList: [];
  productStore: [];
}

interface DataSchema extends UserData, Document {}

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: [true, "please enter your fullname"],
    },
    email: {
      type: String,
      required: [true, "please enter your email"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "please enter your password"],
      minlength: 6,
    },
    wishList: [
      {
        type: mongoose.Types.ObjectId,
        ref: "userWishList",
      },
    ],
    productStore: [
      {
        type: mongoose.Types.ObjectId,
        ref: "products",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const UserModel = model<DataSchema>("User", userSchema);

export default UserModel;
