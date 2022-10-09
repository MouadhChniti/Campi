const express = require("express")
const userRouter = require ("./routers/user")
const resRouter = require ("./routers/reservation")
const recRouter = require ("./routers/reclamation")
const cors =require ('cors')


var server = express()
var port=5000
server.use(express.json())
server.use(cors("*"))
require("./db/connection")
server.use(userRouter)
server.use(resRouter)
server.use(recRouter)
server.listen(port,() => {
console.log(`server is running on : ${port}`)
})





