const mongoose = require ("mongoose")
const uri ="mongodb+srv://mouadh:mouadhchniti1112002@sastecskills.3g5xjoc.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(uri,(err)=>{
    if(err) {
    console.log("err in db connection : ",err)
}
else{
    console.log("connect to DB")
}

});