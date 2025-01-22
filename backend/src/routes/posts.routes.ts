import { Router } from "express";
import { createPostController } from "../controllers/posts/create-post.controller";
import { getPostsController } from "../controllers/posts/get-posts.controller";
import { deletePostController } from "../controllers/posts/delete-post.controller";
import { updatePostController } from "../controllers/posts/update-post.controller";

export let postsRoutes = Router();




postsRoutes.post('',createPostController as any);
postsRoutes.get('',getPostsController as any);
postsRoutes.patch('',updatePostController as any);
postsRoutes.delete('/:id',deletePostController as any);

