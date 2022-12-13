import mongoose from "mongoose";
import validate from 'mongoose-validator';
var phoneNumberValidator = [
    validate({
      validator: 'isLength',
      arguments: [10,10],
      message: 'Please enter a valid phone number'
    })]

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true,"Please enter your name"]
    },
    phoneNumber: {
        type: String,
        unique: true,
        required: [true, "Please enter your phone number"],
        validate:phoneNumberValidator
        
    },
    teamOne: {
        type: String,
        required:true
        
    },
    teamTwo: {
        type: String,
        required:true
        
    },
    teamOneScore: {
        type:Number,
        required:true
        
    },
    teamTwoScore: {
        type: Number,
        required:true
        
    },
    penalty: {
        type:String
    },
    batchNumber: {
        type:String
    }


}, { timestamps: true })


const User = mongoose.model('User', userSchema);
export default User;
