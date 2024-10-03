import { Request, Response } from 'express';
import Planet from '../models/planet.model';

// Criar Planeta
export const createPlanet = async (req: Request, res: Response) => {
  const { name, climate, terrain, population } = req.body;
  try {
    const planet = new Planet({ name, climate, terrain, population });
    await planet.save();
    return res.status(201).json(planet);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating planet', error });
  }
};

// Listar todos os planetas
export const getPlanets = async (req: Request, res: Response) => {
  try {
    const planets = await Planet.find();
    return res.status(200).json(planets);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching planets', error });
  }
};

// Obter um planeta específico por ID
export const getPlanetById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const planet = await Planet.findById(id);
    if (!planet) return res.status(404).json({ message: 'Planet not found' });
    return res.status(200).json(planet);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching planet', error });
  }
};

// Atualizar informações de um planeta
export const updatePlanet = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, climate, terrain, population } = req.body;
  try {
    const planet = await Planet.findByIdAndUpdate(id, { name, climate, terrain, population }, { new: true });
    if (!planet) return res.status(404).json({ message: 'Planet not found' });
    return res.status(200).json(planet);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating planet', error });
  }
};

// Deletar um planeta
export const deletePlanet = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const planet = await Planet.findByIdAndDelete(id);
    if (!planet) return res.status(404).json({ message: 'Planet not found' });
    return res.status(200).json({ message: 'Planet deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting planet', error });
  }
};
