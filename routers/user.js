const express=require("express")
var route=express.Router()
const user=require("../controllers/user")
const MiddlewareAuth=require("../controllers/")
// route.get("/user/",user.getManyuser)
// route.get("/user/:id",user.getByIduser)
// route.post("/user/",user.postuser)
// route.put("/user/",user.putManyuser)
// route.put("/user/:id",user.putByIduser)
// route.delete("/user/",user.deleteManyuser)
// route.delete("/user/:id",user.deleteByIduser)
//route.post("/user/signup/",user.signup)
route.post("/user/signin/",Middleware.MiddlewareAuth,user.signin)

module.exports=route