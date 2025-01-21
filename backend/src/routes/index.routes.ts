import { Router } from "express";
import { categoryRoutes } from "./category.routes";
import { postsRoutes } from "./posts.routes";

export let routes = Router();
routes.use("/category", categoryRoutes);
routes.use("/posts", postsRoutes);