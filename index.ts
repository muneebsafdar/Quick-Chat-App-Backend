import dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";
import router from "./routes/index.js";
import cors from "cors";
import { Server, Socket } from "socket.io";
import {createServer} from 'http'

const app = express()
const port = 8000
app.use(express.json());


const server = createServer(app)
const io = new Server(server,{
  cors:{
    origin:"*"
  }
})


export {
  io
}


app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);



app.use("/api",router);

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
