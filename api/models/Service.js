import mongoose from 'mongoose';
const { Schema } = mongoose;

const ServiceSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    cnpj:{
        type: String,
        required:true
    },
    type:{
        type: String,
        required:true
    },
    city:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    distance:{
        type: String,
        required:true
    },
    photos:{
        type:[ String],
    },
    title:{
        type: String,
        required:true
    },
    desc:{
        type: String,
        required:true
    },
    rating:{
        type: Number,
        min:0,
        max:5,
    },
    products:{
        type:[String],
    },
    cheaprestPrice:{         //Preco mais barato
        type: Number,
        required: true        
    },
    featured: {    //Destaque
        type: Boolean,
        default: false
    },
});

export default mongoose.model("Service", ServiceSchema);

