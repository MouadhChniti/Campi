const mongoose = require ("mongoose")

const user = new mongoose.Schema(
    {
        firstName: {type: String },
        lastName: {type: String },
        phoneNumber: {type: String },
        email:{type: String},
        password:{type: String},
        confirmPassword:{type: String}

    },
    {timestamps: true}
);

const model = mongoose.model("user",user);

module.exports =model;