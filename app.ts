import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { setupSwagger } from './swagger';

dotenv.config();
setupSwagger(app);
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI!, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

export default app;
