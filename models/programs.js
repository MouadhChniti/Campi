const mongoose=require("mongoose")


const programs= new mongoose.Schema(
{
    description:{type:String},
    libelle:{type:String},
    location:{type:String},
    prix:{type:Number}
},
{   
    timestamps:true
}
)
const model=mongoose.model("programs",programs)
module.exports=model