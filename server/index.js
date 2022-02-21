const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const {Server} = require('socket.io')

const PORT = process.env.PORT || 3001
app.use(cors());
const server = http.createServer(app)

const io = new Server(server, {
    cors:{
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket)=>{
    console.log(`User connected: ${socket.id}`);

    socket.on("joinRoom", (data)=>{
        socket.join(data);
        console.log(`User ID: ${socket.id} joind ${data}`);
    })

    socket.on("disconnect", ()=>{
        console.log(`User disconnected: ${socket.id}`);
    })
})

server.listen(PORT, ()=>console.log(`Server is running ${PORT}`));