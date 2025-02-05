import express, { Request, Response } from "express";
import logger from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import classifyNumber from "./controllers/classifyNumberController";

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

dotenv.config({ path: "./src/.env" });

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to the Number Classification API" });
});

app.get("/api/classify-number/:number", classifyNumber);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
