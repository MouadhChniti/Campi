const { request, response } = require("express")
const reclamationModel = require("../models/reclamation")

const getManyReclamation=async(request,response)=>{
    let result = await reclamationModel.find()
    console.log(result)
    response.send(result)
}
const getByIdReclamation = async (request, response) => {
    let result = await reclamationModel.findById(request.params.id)
    response.send(result)
}
const postReclamation=(request,response)=>{
    const input=request.body
    let rec=new reclamationModel(input)
    reclamationModel.create(rec)
    response.send(rec)
}
const putManyReclamation = async (request, response) => {
    const body = request.body
    let result =await reclamationModel.updateMany ({ _id: { $in: input.ids } }, body.input)
    response.send(result)
}
const putByIdReclamation = async (request, response) => {
    const input = request.body
    let result =await reclamationModel.findByIdAndUpdate ( request.params.id, input, {new : true})
    response.send(result)
}
const deleteManyReclamation = async(request,response)=>{
    const input = request.body
    let result= await reclamationModel.deleteMany(input)
    response.send(result)
}
const deleteByIdReclamation=async(request,response)=>{
    let result=await reclamationModel.findByIdAndDelete(request.params.id)
    response.send(result)
}
const reclamation ={
    getManyReclamation,
    getByIdReclamation,
    postReclamation,
    putManyReclamation,
    putByIdReclamation,
    deleteManyReclamation,
    deleteByIdReclamation
}
module.exports=reclamation