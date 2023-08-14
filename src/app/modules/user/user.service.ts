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

const getAllUser = async (): Promise<User[]> => {
  const users = await prisma.user.findMany();
  return users;
};

const getSingleUser = async (payload: number): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: {
      id: payload,
    },
  });

  return user;
};

export const UserService = {
  createOrUpdateUser,
  getAllUser,
  getSingleUser,
};
