const { request, response } = require("express")
const reservationModel = require("../models/reservation")

const getManyreservation=async(request,response)=>{
    let result = await reservationModel.find()
    console.log(result)
    response.send(result)
}
const getByIdreservation = async (request, response) => {
    let result = await reservationModel.findById(request.params.id)
    response.send(result)
}
const postreservation=async(request,response)=>{
    const input=request.body
    let userId = request.user._id
    let user=new reservationModel({...input,userId})
  let newuser =await  reservationModel.create(user)
    response.send(newuser)
}
const putManyreservation = async (request, response) => {
    const body = request.body
    let result =await reservationModel.updateMany ({ _id: { $in: input.ids } }, body.input)
    response.send(result)
}
const putByIdreservation = async (request, response) => {
    const input = request.body
    let result =await reservationModel.findByIdAndUpdate ( request.params.id, input, {new : true})
    response.send(result)
}
const deleteManyreservation = async(request,response)=>{
    const input = request.body
    let result= await reservationModel.deleteMany(input)
    response.send(result)
}
const deleteByIdreservation=async(request,response)=>{
    let result=await reservationModel.findByIdAndDelete(request.params.id)
    response.send(result)
}
const reservation ={
    getManyreservation,
    getByIdreservation,
    postreservation,
    putManyreservation,
    putByIdreservation,
    deleteManyreservation,
    deleteByIdreservation
}
module.exports=reservation