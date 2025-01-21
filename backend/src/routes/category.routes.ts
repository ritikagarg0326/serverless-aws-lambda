import { Response, Router } from "express";
import { getCategoryController, } from "../controllers/categories/create-category.controller";
import { deleteCategoryController } from "../controllers/categories/delete-category.controller copy";
import { updateCategoryController } from "../controllers/categories/update-category.controller";
import { getCategoriesController } from "../controllers/categories/get-category.controller";

export let categoryRoutes = Router();


categoryRoutes.post("",getCategoryController as any );
categoryRoutes.delete(":categoryId",deleteCategoryController as any);
categoryRoutes.patch("",updateCategoryController as any);
categoryRoutes.get("", getCategoryController as any );
