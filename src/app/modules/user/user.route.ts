import express, { Router } from "express";
import { UserController } from "./user.controller";
const router: Router = express.Router();

router.post("/create-user", UserController.createOrUpdateUser);

export const UserRoutes = router;
