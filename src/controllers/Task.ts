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
        is_deleted: false,
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
const GetTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany({
      where: {
        is_deleted: false,
      },
    });
    res.status(200).json({
      status: "success",
      message: "Tasks fetched successfully",
      data: tasks,
    });
  } catch (error: any) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};
const UpdateTask = async (req: Request, res: Response) => {
  const { id, task_name, task_description, is_completed, is_deleted } =
    req.body;
  const updateData: any = {};
  if (task_name) updateData.task_name = task_name;
  if (task_description) updateData.task_description = task_description;
  if (typeof is_completed !== "undefined")
    updateData.is_completed = is_completed;
  if (typeof is_deleted !== "undefined") updateData.is_deleted = is_deleted;
  try {
    const updatedTask = await prisma.task.update({
      where: {
        id: parseInt(id),
      },
      data: updateData,
    });

    res.status(200).json({
      status: "success",
      message: "Task updated successfully",
      data: updatedTask,
    });
  } catch (error: any) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

const GetTaskById = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    const task = await prisma.task.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!task) {
      res.status(404).json({
        status: "failed",
        message: "Task not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Task fetched successfully",
      data: task,
    });
  } catch (error: any) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

export { CreateTask, GetTasks, UpdateTask, GetTaskById };
