const { request, response } = require("express")
const programsModel = require("../models/programs")

const getManyprograms=async(request,response)=>{
    let result = await programsModel.find()
    console.log(result)
    response.send(result)
}
const getByIdprograms = async (request, response) => {
    let result = await programsModel.findById(request.params.id)
    response.send(result)
}
const postprograms=(request,response)=>{
    const input=request.body
    let user=new programsModel(input)
    programsModel.create(user)
    response.send(user)
}
const putManyprograms = async (request, response) => {
    const body = request.body
    let result =await programsModel.updateMany ({ _id: { $in: input.ids } }, body.input)
    response.send(result)
}
const putByIdprograms = async (request, response) => {
    const input = request.body
    let result =await programsModel.findByIdAndUpdate ( request.params.id, input, {new : true})
    response.send(result)
}
const deleteManyprograms = async(request,response)=>{
    const input = request.body
    let result= await programsModel.deleteMany(input)
    response.send(result)
}
const deleteByIdprograms=async(request,response)=>{
    let result=await programsModel.findByIdAndDelete(request.params.id)
    response.send(result)
}
const programs ={
    getManyprograms,
    getByIdprograms,
    postprograms,
    putManyprograms,
    putByIdprograms,
    deleteManyprograms,
    deleteByIdprograms
}
module.exports=programs