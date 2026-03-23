import dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";
import router from "./routes/index.js";


const app = express()
const port = 8000

app.use(express.json());

app.use("/api",router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
