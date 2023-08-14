import catchAsync from "../../../utils/catchAsync";
import { UserService } from "./user.service";

const createUser = catchAsync(async (req, res) => {
  const userData = req.body;
  const result = await UserService.createUser(userData);

  res.send(result);
});

export const UserController = {
  createUser,
};
