import { Router } from "express";
import {
  getPosts,
  createPosts,
  updatePost,
  deletePost,
  likePost,
  getPostsBySearch
} from "../controllers/posts.controller.js";

//middleware
import auth from "../middleware/auth.js";

const router = Router();

router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.post("/", auth, createPosts);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);

export default router;
