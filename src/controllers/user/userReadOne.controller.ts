import { Request, Response } from "express";
import userReadOneService from "../../services/user/userReadOne.service";

const userReadOneController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const readedUser = await userReadOneService(id);
    const { password, ...user } = readedUser;

    return res.status(200).json(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userReadOneController;
