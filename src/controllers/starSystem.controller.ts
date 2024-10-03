import { Request, Response } from 'express';
import StarSystem from '../models/starSystem.model';

// Criar Sistema Estelar
export const createStarSystem = async (req: Request, res: Response) => {
  const { name, description, planets } = req.body;
  try {
    const starSystem = new StarSystem({ name, description, planets });
    await starSystem.save();
    return res.status(201).json(starSystem);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating star system', error });
  }
};

// Listar todos os sistemas estelares
export const getStarSystems = async (req: Request, res: Response) => {
  try {
    const starSystems = await StarSystem.find().populate('planets');
    return res.status(200).json(starSystems);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching star systems', error });
  }
};

// Obter um sistema estelar específico por ID
export const getStarSystemById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const starSystem = await StarSystem.findById(id).populate('planets');
    if (!starSystem) return res.status(404).json({ message: 'Star system not found' });
    return res.status(200).json(starSystem);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching star system', error });
  }
};

// Atualizar informações de um sistema estelar
export const updateStarSystem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, planets } = req.body;
  try {
    const starSystem = await StarSystem.findByIdAndUpdate(id, { name, description, planets }, { new: true });
    if (!starSystem) return res.status(404).json({ message: 'Star system not found' });
    return res.status(200).json(starSystem);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating star system', error });
  }
};

// Deletar um sistema estelar
export const deleteStarSystem = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const starSystem = await StarSystem.findByIdAndDelete(id);
    if (!starSystem) return res.status(404).json({ message: 'Star system not found' });
    return res.status(200).json({ message: 'Star system deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting star system', error });
  }
};
