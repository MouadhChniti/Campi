const express=require("express")
var route=express.Router()
const reclamation=require("../controllers/reclamation")
route.get("/reclamation",reclamation.getManyReclamation)
route.get("/reclamation/:id",reclamation.getByIdReclamation)
route.post("/reclamation",reclamation.postReclamation)
route.put("/reclamation",reclamation.putManyReclamation)
route.put("/reclamation/:id",reclamation.putByIdReclamation)
route.delete("/reclamation",reclamation.deleteManyReclamation)
route.delete("/reclamation/:id",reclamation.deleteByIdReclamation)

module.exports=route