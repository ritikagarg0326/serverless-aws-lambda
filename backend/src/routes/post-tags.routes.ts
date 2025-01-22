import { Router } from "express";
import { getPostTagsController } from "../controllers/post-tags/get-post-tag.controller";
import { deletePostTagController } from "../controllers/post-tags/delete-post-tag.controller";
import { createPostTagController } from "../controllers/post-tags/create-post-tag.controller";

export let postTagRoutes = Router();

postTagRoutes.post("", createPostTagController as any);
postTagRoutes.delete("/:id",deletePostTagController as any);
postTagRoutes.get("", getPostTagsController as any);