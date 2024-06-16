import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to Database!");
  app.listen(process.env.PORT, () => console.log("SERVER STARTED!"));
}).catch((error) => {
    console.log(error);
});
