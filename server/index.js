import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import { userRouter } from "./routes/users.route.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to Database!");
  app.listen(process.env.PORT, () => console.log("SERVER STARTED!"));
}).catch((error) => {
    console.log(error);
});
