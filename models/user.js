import { Schema,model } from 'mongoose';
import config from '../config';
import jwt from 'jsonwebtoken';
const UserSchema = new Schema ({
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    register_date: {
        type: Date,
        default: Date.now
    },
})

const User = model('User', UserSchema);

export default User;