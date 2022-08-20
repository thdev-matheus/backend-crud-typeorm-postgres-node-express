import { Request, Response } from "express";
import usersReadAllService from "../../services/user/usersReadAll.service";

const usersReadAllController = async (req: Request, res: Response) => {
  try {
    const users = await usersReadAllService();

    return res.status(200).json(users);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default usersReadAllController;
