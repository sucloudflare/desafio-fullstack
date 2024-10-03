import { Schema, model } from 'mongoose';

const spaceshipSchema = new Schema({
  name: { type: String, required: true },
  model: { type: String, required: true },
  manufacturer: { type: String, required: true },
  passengerCapacity: { type: Number, default: 0 }
});

export default model('Spaceship', spaceshipSchema);
