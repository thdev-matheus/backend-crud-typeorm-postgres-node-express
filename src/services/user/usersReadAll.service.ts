import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const usersReadAllService = async () => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.query(
    `
      select
        u.id, u.name, u.email, u.age, u.created_at, u.updated_at
      from
        users u;
      `
  );

  return users;
};

export default usersReadAllService;
