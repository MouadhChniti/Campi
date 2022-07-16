const mongoose = require ("mongoose")

const user = new mongoose.Schema(
    {
        userName: {type: String },
        lastName: {type: String },
        email:{type: String},
        password:{type: String}
    },
    {timestamps: true}
);

const model = mongoose.model("user",user);

module.exports =model;