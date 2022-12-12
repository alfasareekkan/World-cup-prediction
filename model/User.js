import mongoose from "mongoose";
import validator from 'validator'
import validate from 'mongoose-validator';
var phoneNumberValidator = [
    validate({
      validator: 'isLength',
      arguments: [10,10],
      message: 'Please enter a valid phone number'
    })]

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:[true,"Please enter an first name"]
    },
    firstName: {
        type: String,
        required:[true,"Please enter an first last name"]
    },
    email: {
        type: String,
        required: [true,"Please enter an email"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail,'Please enter a valid email']
    },
    phoneNumber: {
        type: String,
        unique: true,
        required: [true, "Please enter an phone number"],
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
        type: String,
        required:true
        
    },
    teamTwoScore: {
        type: String,
        required:true
        
    },
}, { timestamps: true })


const User = mongoose.model('User', userSchema);
export default User;
