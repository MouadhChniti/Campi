const mongoose=require("mongoose")


const programs= new mongoose.Schema(
{
    description:{type:String},
    libelle:{type:String},
    location:{type:String},
    prix:{type:number}
},
{   
    timestamps:true
}
)
const model=mongoose.model("programs",programs)
module.exports=model