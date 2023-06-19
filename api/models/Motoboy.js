import mongoose from 'mongoose';

const { Schema } = mongoose;

const MotoboySchema = new Schema({
  rating: {
    type: Number,
    default: 0
  },
  bag: {
    type: Boolean,
    required: true
  },
  veiculo: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: 'ativo'
  },
  photo: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Motoboy = mongoose.model('Motoboy', MotoboySchema);

export default Motoboy;