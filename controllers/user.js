const { request, response } = require("express")
const userModel = require("../models/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const getManyuser=async(request,response)=>{
    let result = await userModel.find()
    console.log(result)
    response.send(result)
}
const getByIduser = async (request, response) => {
    let result = await userModel.findById(request.params.id)
    response.send(result)
}
const postuser=(request,response)=>{
    const input=request.body
    let user=new userModel(input)
    userModel.create(user)
    response.send(user)
}
const putManyuser = async (request, response) => {
    const body = request.body
    let result =await userModel.updateMany ({ _id: { $in: input.ids } }, body.input)
    response.send(result)
}
const putByIduser = async (request, response) => {
    const input = request.body
    let result =await userModel.findByIdAndUpdate ( request.params.id, input, {new : true})
    response.send(result)
}
const deleteManyuser = async(request,response)=>{
    const input = request.body
    let result= await userModel.deleteMany(input)
    response.send(result)
}
const deleteByIduser=async(request,response)=>{
    let result=await userModel.findByIdAndDelete(request.params.id)
    response.send(result)
}

const signup = async (request, response) => {
    let input = request.body;
    let userExist = await userModel.findOne({ email: input.email });
    if (userExist) {
      return response.status(400).json({ msg: "email already used !" });
    }
    let hashedPassword = await bcrypt.hash(input.password, 10);
    input.password = hashedPassword;
    let newUser = new userModel(input);
    let result = await userModel.create(newUser);
    return response.status(200).json(result);
  };


  

  const signin = async (request, response) => {

    let input = request.body;
    let userExist = await userModel.findOne({ email: input.email });
    let validPass = bcrypt.compare(input.password, userExist.password)
   
    if (!userExist) {
        return response.status(404).json({ msg: "user not found !" });}
    else{
     if(!validPass)
     {
         return response.status(403).json({msg:"inncorrect password!"});
     }

     else{
            let token = jwt.sign({ userId: userExist._id }, "TOKEN-CRYPTER", {
              expiresIn: "24h",
            });
            response.cookie("token", token);
            response.status(200).json({
              user: userExist,
              token,
            });
       return response.status(200).json({ msg: "Authentificated" });}
    }; 
   };


const user ={
    getManyuser,
    getByIduser,
    postuser,
    putManyuser,
    putByIduser,
    deleteManyuser,
    deleteByIduser,
    signup,
    signin
}
module.exports=user



// const signin = async (request, response) => {
  //   const input = request.body;
  
  //   await userModel
  //     .findOne({ email: input.email })
  //     .then((result) => {
  //       if (!result) {
  //         return response.status(401).json({
  //           error: "utilisateur non trouvé (email or password non valid) !",
  //         });
  //       }
  
  //       bcrypt
  //         .compare(input.password, result.password)
  //         .then((validPass) => {
  //           if (!validPass) {
  //             return response
  //               .status(401)
  //               .json({ error: "mot de passe incorrect !" });
  //           }
  //           let token = jwt.sign({ userId: result._id }, "CRYPTING-TOKEN", {
  //             expiresIn: "24h",
  //           });
  //           response.cookie("token", token);
  //           response.status(200).json({
  //             user: result,
  //             token,
  //           });
  //         })
  //         .catch((error) => response.status(500).json({ error }));
  //     })
  //     .catch((error) => response.status(500).json({ error }));
  // };