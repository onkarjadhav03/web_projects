const express =  require('express');
const app= express();
//getting http module
const http = require('http');
//creating http server and passing express as req handler
const server = http.createServer(app); //app is used as req handler.
const path = require('path');
const socketio = require('socket.io');
const io = socketio(server);


app.use('/',express.static(path.join(__dirname,'public')));

const users = {};
io.on('connection', (socket)=>{
   // console.log(socket.id);
    console.log(`someone got connected with ${socket.id}`);


    socket.on('send-msg',(data)=>{
       io.emit('received-msg',{
        msg:data.msg,
       username:users[socket.id]
       })
    });


    //mapping username with socket id
    socket.on('login',(data)=>{
        users[socket.id]=data.username;
    })
})

const port = process.env.port || 3000;
server.listen(port,()=>{
    console.log(`server started at ${port}`);
})




