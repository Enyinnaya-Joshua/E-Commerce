import { Response, Request } from "express";
import UserModel from "../model/user.model";
import UserProduct from "../model/product.model";
import ShopProduct from "../model/shop.model";
import mongoose from "mongoose";

// GET ALL PRODUCTS
export const Products = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const product = await UserProduct.find();
    return res.status(200).json({
      message: "product gotten successfully",
      data: product,
    });
  } catch (error) {
    return res.status(400).json({
      message: "error occur",
      data: error,
    });
  }
};

// GET SINGLE PRODUCT
export const singelProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const OneProduct = await UserProduct.findById(req.params.id);
    return res.status(200).json({
      message: "product gotten successfully",
      data: OneProduct,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occured in singleProduct",
      data: error,
    });
  }
};

// CREATE PRODUCT
export const CreateProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    // const product = await UserProduct.findById(req.params._id);
    const shop: any = await ShopProduct.findById(req.params.productID);

    if (shop) {
      const { name, price } = req.body;

      const CreateProduct: any = await UserProduct.create({
        name,
        price,
      });
      await shop?.Product?.push(
        new mongoose.Types.ObjectId(CreateProduct!._id)
      );

      shop.save();

      return res.status(200).json({
        message: "product successfully created",
        data: CreateProduct,
      });
    }

    return res.status(401).json({
      message: "an error occured creating product",
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occured when creating product",
      data: error,
    });
  }
};
