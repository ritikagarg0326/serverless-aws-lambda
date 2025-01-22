import { Router } from "express";
import { categoryRoutes } from "./category.routes";
import { postsRoutes } from "./posts.routes";
import { tagRoutes } from "./tag.routes";
import { postTagRoutes } from "./post-tags.routes";

export let routes = Router();
routes.use("/category", categoryRoutes);
routes.use("/posts", postsRoutes);
routes.use("/tag", tagRoutes);
routes.use("/post-tag", postTagRoutes);