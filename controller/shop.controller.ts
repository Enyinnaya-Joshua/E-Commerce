import { Request, Response } from "express";
import VendorStore from "../model/shop.model";

// SHOP PRODUCTS
export const storeProducts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const stores = await VendorStore.find();
    return res.status(200).json({
      message: "items succesfully gotten",
      data: stores,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an occured getting shop items",
      data: error,
    });
  }
};

export const singleStoreproduct = async (req: Request, res: Response) => {
  try {
    const store = await VendorStore.findById(req.params._id);
  } catch (error) {
    return res.status(400).json({
      message: "an error occured",
      data: error,
    });
  }
};
