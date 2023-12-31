const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {type:String, unique:true},
    email: {type:String, unique:true},
    password: {type:String},
    entryDate:{type:Date, default:Date.now},
})

const Users = mongoose.model('Users', userSchema, 'users')
const MySchemas = {'Users':Users}

module.exports = MySchemas