import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    name:String,
    gender:String,
    age:Number,
    avatar:String,
    bio:String
})



const users = mongoose.model('users',userSchema)

export default users