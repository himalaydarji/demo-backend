import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const CreateTask = async (req: Request, res: Response) => {
  const { task_name, task_description } = req.body;
  try {
    const newTask = await prisma.task.create({
      data: {
        task_name,
        task_description,
        is_completed: false,
      },
    });
    res.status(200).json({
      status: "success",
      message: "Task Created Successfully",
      data: newTask,
    });
  } catch (error: any) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

export { CreateTask };
