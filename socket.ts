
import { Server } from "socket.io";

export function setUpSocket(io:Server){

    io.on("connection",(socket)=>{
        console.log("connnection created successfully ",socket.id)

        socket.on("disconnect",()=>{
            console.log("connnection disconnected successfully ",socket.id)
        })
    })
     
}