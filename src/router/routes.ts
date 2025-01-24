import { Router } from "express";
import { CreateTask, GetTaskById, GetTasks, UpdateTask } from "../controllers/Task";

const router = Router();

router.post("/create-task", CreateTask);
router.get("/get-task", GetTasks);
router.put("/update-task", UpdateTask);
router.post("/get-task-by-id", GetTaskById);

export default router;
