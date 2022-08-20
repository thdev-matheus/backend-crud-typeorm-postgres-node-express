import bcrypt from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUserCreate } from "../../interfaces/user.interface";

const userCreateService = async ({
  name,
  email,
  password,
  age,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new AppError("Email already exists!", 400);
  }

  const createdUser = new User();
  createdUser.name = name;
  createdUser.email = email;
  createdUser.password = bcrypt.hashSync(password, 10);
  createdUser.age = age;
  createdUser.created_at = new Date();
  createdUser.updated_at = new Date();

  userRepository.create(createdUser);
  await userRepository.save(createdUser);

  return createdUser;
};

export default userCreateService;
