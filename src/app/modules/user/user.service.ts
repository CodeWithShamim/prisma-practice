import { User } from "@prisma/client";
import prisma from "../../../utils/prisma";

const createOrUpdateUser = async (data: User): Promise<User> => {
  const isExist = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (isExist) {
    const user = await prisma.user.update({
      where: {
        email: data.email,
      },
      data,
    });
    return user;
  }

  const user = await prisma.user.create({
    data,
  });

  return user;
};

export const UserService = {
  createOrUpdateUser,
};
