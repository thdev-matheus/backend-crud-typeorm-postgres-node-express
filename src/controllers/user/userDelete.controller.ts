import { Request, Response } from "express";
import userDeleteService from "../../services/user/userDelete.service";

const userDeleteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedUser = await userDeleteService(id);

    return res.status(200).json({ message: "user successfully deleted!" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userDeleteController;
