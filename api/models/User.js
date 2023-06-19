import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique: true
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    cpf:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required:true
    },
    isAdmin: {    //Destaque
        type: Boolean,
        default: false
    },
    isEstablishment: {    //Destaque
        type: Boolean,
        default: false
    },
    isMotoboy: {    //Destaque
        type: Boolean,
        default: false
    },
},{timestamps:true});

export default mongoose.model("User", UserSchema);

