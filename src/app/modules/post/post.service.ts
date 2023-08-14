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

const getAllPost = async (options?: any): Promise<Post[]> => {
  const {
    sortBy = "createdAt",
    sortOrder = "desc",
    searchTerm,
    page = 1,
    limit = 10,
  } = options;

  const skip = (parseInt(page) - 1) * parseInt(limit);
  const take = parseInt(limit);

  // pagination, filters/search, order
  let query: any = {
    skip,
    take,
    orderBy: {
      [sortBy]: sortOrder,
    },
    include: {
      author: true,
      category: true,
    },
  };

  if (searchTerm) {
    query.where = {
      OR: [
        {
          title: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
      ],
    };
  }

  return await prisma.post.findMany(query);
};

const updatePost = async (
  id: number,
  payload: Partial<Post>
): Promise<Post> => {
  return await prisma.post.update({
    where: {
      id,
    },
    data: payload,

    include: {
      author: true,
      category: true,
    },
  });
};

const deletePost = async (id: number): Promise<Post> => {
  return await prisma.post.delete({
    where: {
      id,
    },

    include: {
      author: true,
      category: true,
    },
  });
};

export const PostService = {
  createPost,
  getAllPost,
  updatePost,
  deletePost,
};
