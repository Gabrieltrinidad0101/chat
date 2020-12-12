const express = require("express")
const socketIO = require("socket.io");
const path = require("path");
const app = express();
app.set("port",process.env.PORT || 3000)

app.use(express.static(path.join(__dirname,"public")))


const server = app.listen(app.get("port"),()=>{
    console.log("server")
});

const io = socketIO.listen(server)
 

io.on("connection",(socket)=>{
    console.log("new connection")
    socket.on("message",(data)=>{
        io.sockets.emit("message",data)
    });

});