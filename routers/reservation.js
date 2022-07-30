const express=require("express")
var route=express.Router()
const reservation=require("../controllers/reservation")
const Middleware=require("../middlewares/test")
 route.get("/reservation/",reservation.getManyreservation)
 route.get("/reservation/:id",reservation.getByIdreservation)
 route.post("/reservation/",reservation.postreservation)
 route.put("/reservation/",reservation.putManyreservation)
 route.put("/reservation/:id",reservation.putByIdreservation)
 route.delete("/reservation/",reservation.deleteManyreservation)
 route.delete("/reservation/:id",reservation.deleteByIdreservation)


module.exports=route