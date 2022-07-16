const express = require("express")
const userRouter = require ("./routers/user")

var server = express()
var port=5000
server.use(express.json())

require("./db/connection")
server.use(userRouter)

server.listen(port,() => {
console.log(`server is running on : ${port}`)
})





