import { Router } from "express";
import { createPostController } from "../controllers/posts/create-post.controller";
import { getPostsController } from "../controllers/posts/get-posts.controller";
import { deletePostController } from "../controllers/posts/delete-post.controller";
import { updatePostController } from "../controllers/posts/update-post.controller";
import { createTagController } from "../controllers/tags/create-tag.controller";
import { getTagsController } from "../controllers/tags/get-tag.controller";
import { updateTagController } from "../controllers/tags/update-tag.controller";
import { deleteTagController } from "../controllers/tags/delete-tag.controller";

export let tagRoutes = Router();

tagRoutes.post('',createTagController as any);
tagRoutes.get('',getTagsController as any);
tagRoutes.patch('',updateTagController as any);
tagRoutes.delete('/:tagId',deleteTagController as any);

