import express, { Router } from "express";
import { UserController } from "./user.controller";
const router: Router = express.Router();

router.get("/", UserController.getAllUser);
router.get("/:id", UserController.getSingleUser);
router.post("/", UserController.createOrUpdateUser);
router.delete("/:id", UserController.deleteUser);

export const UserRoutes = router;
