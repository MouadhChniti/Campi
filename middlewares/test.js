const jwt = require("jsonwebtoken");
const privateKey = "TOKEN-CRYPTER";
const userModel = require("./../models/user");
const MiddlewareAuth = async (req, res, next) => {
  let token = req.headers.authorization;
  console.log(token);
  await jwt.verify(token, privateKey, async (err, result) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ error: "invalid JWT !" });
    } else {
      try {
        console.log("this is payload =>", result);
        // TODO : verify user exist !
        let user = await userModel.findById(result.userId);
        console.log("this is the user => ", user);
        req.user = user;
        next();
      } catch (error) {
        return res.status(401).json({ error: "invalid Payload !" });
      }
    }
  });
};

module.exports = MiddlewareAuth;