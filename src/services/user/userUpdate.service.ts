import bcrypt from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUserUpdate } from "../../interfaces/user.interface";

const userUpdateService = async ({
  id,
  name,
  email,
  password,
  age,
}: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { id } });

  if (!user) {
    throw new AppError("User not found!", 404);
  }

  user.name = name || user.name;
  user.email = email || user.email;
  user.age = age || user.age;
  user.updated_at = new Date();

  if (password) {
    user.password = bcrypt.hashSync(password, 10);
  }

  await userRepository.save(user);

  return user;
};

export default userUpdateService;
