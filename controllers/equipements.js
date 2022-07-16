const { request, response } = require("express")
const equipementsModel = require("../models/equipements")

const getManyequipements=async(request,response)=>{
    let result = await equipementsModel.find()
    console.log(result)
    response.send(result)
}
const getByIdequipements = async (request, response) => {
    let result = await equipementsModel.findById(request.params.id)
    response.send(result)
}
const postequipements=(request,response)=>{
    const input=request.body
    let user=new equipementsModel(input)
    equipementsModel.create(user)
    response.send(user)
}
const putManyequipements = async (request, response) => {
    const body = request.body
    let result =await equipementsModel.updateMany ({ _id: { $in: input.ids } }, body.input)
    response.send(result)
}
const putByIdequipements = async (request, response) => {
    const input = request.body
    let result =await equipementsModel.findByIdAndUpdate ( request.params.id, input, {new : true})
    response.send(result)
}
const deleteManyequipements = async(request,response)=>{
    const input = request.body
    let result= await equipementsModel.deleteMany(input)
    response.send(result)
}
const deleteByIdequipements=async(request,response)=>{
    let result=await equipementsModel.findByIdAndDelete(request.params.id)
    response.send(result)
}
const equipements ={
    getManyequipements,
    getByIdequipements,
    postequipements,
    putManyequipements,
    putByIdequipements,
    deleteManyequipements,
    deleteByIdequipements
}
module.exports=equipements