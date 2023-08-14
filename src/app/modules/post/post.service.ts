import { Post } from "@prisma/client";
import prisma from "../../../utils/prisma";

const createPost = async (data: Post): Promise<Post> => {
  return await prisma.post.create({
    data,
    include: {
      author: true,
      category: true,
    },
  });
};

const getAllPost = async (): Promise<Post[]> => {
  return await prisma.post.findMany({
    include: {
      author: true,
      category: true,
    },
  });
};

export const PostService = {
  createPost,
  getAllPost,
};
