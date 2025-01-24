import { Router } from "express";
import { CreateTask } from "../controllers/Task";

const router = Router();

router.post("/create-task", CreateTask);

export default router;
