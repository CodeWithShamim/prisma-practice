import { User } from "@prisma/client";
import prisma from "../../../utils/prisma";

const createUser = async (data: User): Promise<User> => {
  const user = await prisma.user.create({
    data,
  });

  return user;
};

export const UserService = {
  createUser,
};
