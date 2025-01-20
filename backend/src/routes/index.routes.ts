import { Router } from "express";
import { categoryRoutes } from "./category.routes";

export let routes = Router();
routes.use("/category", categoryRoutes);