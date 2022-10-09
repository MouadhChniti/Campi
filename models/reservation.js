const mongoose=require("mongoose")


const reservation= new mongoose.Schema(
{
    // userId:{type:mongoose.Types.ObjectId,refs:"user"} ,
    programId:{type:String},
    datein:{type:String},
    dateout:{type:String},
    name:{type:String},
    adultnum:{type:String},
    kidsnum:{type:String},
    email:{type:String},
    phoneNumber:{type:String},
},
{   
    timestamps:true
}
)
const model=mongoose.model("reservation",reservation)
module.exports=model