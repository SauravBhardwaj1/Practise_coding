const {WebSocketServer} = require('ws')

const wss = new WebSocketServer({port : 8000})


wss.on("connection", (socket)=>{
    console.log("connection is on")

    socket.send("Hello from server")

    socket.onmessage = (event)=> console.log(event.data)

    socket.onclose = ()=>{
        console.log("connection closed")
    }
})