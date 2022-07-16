const express=require("express")
var route=express.Router()
const programs=require("../controllers/programs")
route.get("/programs",programs.getManyprograms)
route.get("/programs/:id",programs.getByIdprograms)
route.post("/programs",programs.postprograms)
route.put("/programs",programs.putManyprograms)
route.put("/programs/:id",programs.putByIdprograms)
route.delete("/programs",programs.deleteManyprograms)
route.delete("/programs/:id",programs.deleteByIdprograms)

module.exports=route

