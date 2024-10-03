import { Request, Response } from 'express';
import Spaceship from '../models/spaceship.model';

// Criar Nave Espacial
export const createSpaceship = async (req: Request, res: Response) => {
  const { name, model, manufacturer, passengerCapacity } = req.body;
  try {
    const spaceship = new Spaceship({ name, model, manufacturer, passengerCapacity });
    await spaceship.save();
    return res.status(201).json(spaceship);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating spaceship', error });
  }
};

// Listar todas as naves espaciais
export const getSpaceships = async (req: Request, res: Response) => {
  try {
    const spaceships = await Spaceship.find();
    return res.status(200).json(spaceships);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching spaceships', error });
  }
};

// Obter uma nave espacial específica por ID
export const getSpaceshipById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const spaceship = await Spaceship.findById(id);
    if (!spaceship) return res.status(404).json({ message: 'Spaceship not found' });
    return res.status(200).json(spaceship);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching spaceship', error });
  }
};

// Atualizar informações de uma nave espacial
export const updateSpaceship = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, model, manufacturer, passengerCapacity } = req.body;
  try {
    const spaceship = await Spaceship.findByIdAndUpdate(id, { name, model, manufacturer, passengerCapacity }, { new: true });
    if (!spaceship) return res.status(404).json({ message: 'Spaceship not found' });
    return res.status(200).json(spaceship);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating spaceship', error });
  }
};

// Deletar uma nave espacial
export const deleteSpaceship = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const spaceship = await Spaceship.findByIdAndDelete(id);
    if (!spaceship) return res.status(404).json({ message: 'Spaceship not found' });
    return res.status(200).json({ message: 'Spaceship deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting spaceship', error });
  }
};
