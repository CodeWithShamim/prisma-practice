import { Request, Response } from "express";
import catchAsync from "../../../utils/catchAsync";
import { PostService } from "./post.service";
import sendResponse from "../../../utils/sendResponse";
import { Post } from "@prisma/client";

const createPost = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await PostService.createPost(data);

  sendResponse<Post>(res, {
    success: true,
    statusCode: 200,
    message: "Post created successfully",
    data: result,
  });
});

const getAllPost = catchAsync(async (req: Request, res: Response) => {
  const result = await PostService.getAllPost();

  sendResponse<Post[]>(res, {
    success: true,
    statusCode: 200,
    message: "Post retrieved successfully",
    data: result,
  });
});

const updatePost = catchAsync(async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const updatedData = req.body;
  const result = await PostService.updatePost(id, updatedData);

  sendResponse<Post>(res, {
    success: true,
    statusCode: 200,
    message: "Post updated successfully",
    data: result,
  });
});

const deletePost = catchAsync(async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const result = await PostService.deletePost(id);

  sendResponse<Post>(res, {
    success: true,
    statusCode: 200,
    message: "Post deleted successfully",
    data: result,
  });
});

export const PostController = {
  createPost,
  getAllPost,
  updatePost,
  deletePost,
};
