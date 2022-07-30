const mongoose=require("mongoose")


const equipements= new mongoose.Schema(
{
    equipId:{type:String},
    description:{type:String},
    mail:{type:String},
    nom:{type:String},
    prenom:{type:String}
},
{   
    timestamps:true
}
)
const model=mongoose.model("equipements",equipements)
module.exports=model