import { Schema, model } from 'mongoose';

const planetSchema = new Schema({
  name: { type: String, required: true },
  climate: { type: String, required: true },
  terrain: { type: String, required: true },
  population: { type: Number, default: 0 },
});

export default model('Planet', planetSchema);
