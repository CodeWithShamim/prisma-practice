import express, { Router } from "express";
import { PostController } from "./post.controller";
const router: Router = express.Router();

router.get("/", PostController.getAllPost);
router.post("/", PostController.createPost);
router.patch("/:id", PostController.updatePost);

export const PostRoutes = router;
