import { User } from "@prisma/client";
import prisma from "../../../utils/prisma";

const createOrUpdateUser = async (data: User): Promise<User> => {
  const isExist = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (isExist) {
    return await prisma.user.update({
      where: {
        email: data.email,
      },
      data,
    });
  }

  return await prisma.user.create({
    data,
  });
};

const getAllUser = async (): Promise<User[]> => {
  return await prisma.user.findMany();
};

const getSingleUser = async (payload: number): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: {
      id: payload,
    },
  });
};

const deleteUser = async (payload: number): Promise<User | null> => {
  return await prisma.user.delete({
    where: {
      id: payload,
    },
  });
};

export const UserService = {
  createOrUpdateUser,
  getAllUser,
  getSingleUser,
  deleteUser,
};
