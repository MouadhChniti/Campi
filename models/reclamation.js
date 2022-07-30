const mongoose=require("mongoose")


const reclamation= new mongoose.Schema(
{
    msg:{type:String},
    email:{type:String},
    firstname:{type:String},
    lastname:{type:String}
    
},
{   
    timestamps:true
}
)
const model=mongoose.model("reclamation",reclamation)
module.exports=model