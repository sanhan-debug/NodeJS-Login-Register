import express, { urlencoded } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { pageRoute } from "./Routes/pageRoutes.js";
import { userRoute } from "./Routes/userRoutes.js";

dotenv.config();
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ejs template engine
app.set("view engine", "ejs");

app.use('/',pageRoute)

app.use('/users',userRoute)



app.listen(3001, () => {
  console.log("server is up");

  mongoose.connect(process.env.CONNECTION_STRING).then(() => {
    console.log("Connected to the mongoDB");
  });
});
