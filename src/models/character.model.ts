import { Schema, model } from 'mongoose';

const characterSchema = new Schema({
    name: { type: String, required: true },
    race: { type: String, required: true },
    affiliation: { type: String, enum: ['Jedi', 'Sith', 'Rebelde', 'Império', 'Neutro'], required: true },
    homePlanet: { type: String, required: true },
    description: { type: String },
}, { timestamps: true });

export const Character = model('Character', characterSchema);
