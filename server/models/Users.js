const mongoose = require('mongoose')


//schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

//create model
const UserModel = mongoose.model("user" , UserSchema)


//exports
module.exports = UserModel;