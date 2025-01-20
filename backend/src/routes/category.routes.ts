import { Response, Router } from "express";
import { createCategoryController } from "../controllers/categories/create-category.controller";
import { deleteCategoryController } from "../controllers/categories/delete-category.controller copy";
import { updateCategoryController } from "../controllers/categories/update-category.controller";
import { getCategoryController } from "../controllers/categories/get-category.controller";

export let categoryRoutes = Router();


categoryRoutes.post("",createCategoryController as any );
categoryRoutes.delete(":categoryId",deleteCategoryController as any);
categoryRoutes.patch("",updateCategoryController as any);
categoryRoutes.get("", getCategoryController as any );
