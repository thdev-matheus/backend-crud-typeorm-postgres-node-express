import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const userDeleteService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const userExists = await userRepository.findOne({ where: { id } });

  if (!userExists) {
    throw new AppError("User not found!", 404);
  }

  const deletedUser = await userRepository.delete({ id });

  return deletedUser;
};

export default userDeleteService;
