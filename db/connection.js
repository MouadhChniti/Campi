const mongoose = require ("mongoose")
const uri ="mongodb+srv://mouadh:mouadhchniti1112002@sastecskills.3g5xjoc.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(uri,(error)=>{
    if(error) {
    console.log("error in db connection : ",error)
}
else{
    console.log("connect to DB")
}

});