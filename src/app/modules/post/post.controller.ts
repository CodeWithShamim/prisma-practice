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

export const PostController = {
  createPost,
  getAllPost,
};
