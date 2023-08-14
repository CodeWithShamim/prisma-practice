import express, { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { CategoryRoutes } from "../modules/category/category.route";
import { PostRoutes } from "../modules/post/post.route";
const router: Router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/category",
    route: CategoryRoutes,
  },
  {
    path: "/post",
    route: PostRoutes,
  },
];

moduleRoutes.map((route) => router.use(route.path, route.route));

export default router;
