import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./router/routes";
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  try {
    res.send("Yay! App is running.");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.use("/api", router);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
