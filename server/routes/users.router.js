import { Router } from "express";
import {
  signIn,
  signUp,
  googleLogin,
} from "../controllers/users.controller.js";
import { getGoogleData } from "../middleware/getGoogleData.js";

const router = Router();

router.post("/signin", signIn);
router.post("/signup", signUp);
router.post("/googlelogin", getGoogleData, googleLogin);

export default router;
