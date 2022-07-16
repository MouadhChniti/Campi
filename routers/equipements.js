const express=require("express")
var route=express.Router()
const equipements=require("../controllers/equipements")
route.get("/equipements",equipements.getManyequipements)
route.get("/equipements/:id",equipements.getByIdequipements)
route.post("/equipements",equipements.postequipements)
route.put("/equipements",equipements.putManyequipements)
route.put("/equipements/:id",equipements.putByIdequipements)
route.delete("/equipements",equipements.deleteManyequipements)
route.delete("/equipements/:id",equipements.deleteByIdequipements)

module.exports=route

