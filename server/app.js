import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

app.use(morgan("dev"));

mongoose.connect().then(() => {
  console.log("Database connected");
});

app.listen(3000, () => {
  console.log(`Sever is running on port ${PORT}`);
});
