import { User } from "@prisma/client";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { UserService } from "./user.service";

const createOrUpdateUser = catchAsync(async (req, res) => {
  const userData = req.body;
  const result = await UserService.createOrUpdateUser(userData);

  sendResponse<User>(res, {
    success: true,
    statusCode: 200,
    message: "User created/updated successfully",
    data: result,
  });
});

const getAllUser = catchAsync(async (req, res) => {
  const result = await UserService.getAllUser();

  sendResponse<User[]>(res, {
    success: true,
    statusCode: 200,
    message: "Users retrieved successfully",
    data: result,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await UserService.getSingleUser(id);

  sendResponse<User>(res, {
    success: true,
    statusCode: 200,
    message: "User retrieved successfully",
    data: result,
  });
});

export const UserController = {
  createOrUpdateUser,
  getAllUser,
  getSingleUser,
};
