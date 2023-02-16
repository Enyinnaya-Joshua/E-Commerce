import UserModel from "../model/user.model";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

// BCRYPT REGISTRATION

export const register = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { fullname, email, password } = req.body;

    const salt: string = await bcrypt.genSalt(10);

    const hashedname = await bcrypt.hash(fullname, salt);
    const hashpassword = await bcrypt.hash(password, salt);

    const user = await UserModel.create({
      email,
      password: hashpassword,
      fullname: hashedname,
    });

    if (!user) return res.status(401).json("Please enter the required fields");
    return res.status(201).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      status: "Oops...an error occured",
      data: error,
    });
  }
};

// FOR THE LOGIN

export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user)
      return res.status(401).json({
        status: "User not found",
      });
    const checkPassword = await bcrypt.compare(password, user!.password);
    if (!checkPassword)
      return res.status(401).json({
        status: "password not correct",
      });
    return res.status(200).json({
      status: `welcome ${user.fullname}`,
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "error occured",
      data: error,
    });
  }
};

// GET ALL

export const getUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await UserModel.find();
    return res.status(200).json({
      message: `${user.length} user(s)`,
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "error occur",
      data: error,
    });
  }
};

// GET SINGLE USER

export const singleUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await UserModel.findById(req.params.id);
    return res.status(202).json({
      message: `successfully got the single user ${user}`,
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "couldn't get the single user",
      data: error,
    });
  }
};
