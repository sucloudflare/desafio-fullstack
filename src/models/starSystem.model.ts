import { Schema, model } from 'mongoose';

const starSystemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  planets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }]
});

export default model('StarSystem', starSystemSchema);
