import { Request, Response } from "express";
import userUpdateService from "../../services/user/userUpdate.service";

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, password, age } = req.body;

    const updatedUser = await userUpdateService({
      id,
      name,
      email,
      password,
      age,
    });
    const { password: pwd, ...user } = updatedUser;

    return res.status(200).json({
      message: "User successfully updatedUser",
      user,
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userUpdateController;
