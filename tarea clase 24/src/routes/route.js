import { Router } from "express";
const router = Router();
import {
  logout,
  session,
  log,
  logget,
} from "../controllers/controller.js";
import { loginmiddle } from "../middleware/middleware.js";

router.post("/login", log);

router.get("/", logget);

router.get("/home", loginmiddle, session);

router.get("/logout", logout);

export default router;