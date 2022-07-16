const mongoose=require("mongoose")


const reclamation= new mongoose.Schema(
{
    description:{type:String},
    mail:{type:String},
    nom:{type:String},
    prenom:{type:String}
},
{   
    timestamps:true
}
)
const model=mongoose.model("reclamation",reclamation)
module.exports=model