import { User } from "@prisma/client";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { UserService } from "./user.service";

const createUser = catchAsync(async (req, res) => {
  const userData = req.body;
  const result = await UserService.createUser(userData);

  sendResponse<User>(res, {
    success: true,
    statusCode: 200,
    message: "User created successfully",
    data: result,
  });
});

export const UserController = {
  createUser,
};
