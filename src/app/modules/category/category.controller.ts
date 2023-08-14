import { Request, Response } from "express";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { Category } from "@prisma/client";
import { CategoryService } from "./category.service";

const createCategory = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await CategoryService.createCategory(data);

  sendResponse<Category>(res, {
    success: true,
    statusCode: 200,
    message: "Category created successfully",
    data: result,
  });
});

export const CategoryController = {
  createCategory,
};
