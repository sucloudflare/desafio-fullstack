import { Request, Response } from 'express';
import Character from '../models/character.model';

// Criar Personagem
export const createCharacter = async (req: Request, res: Response) => {
  const { name, race, affiliation, homePlanet } = req.body;
  try {
    const character = new Character({ name, race, affiliation, homePlanet });
    await character.save();
    return res.status(201).json(character);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating character', error });
  }
};

// Listar todos os personagens
export const getCharacters = async (req: Request, res: Response) => {
  try {
    const characters = await Character.find().populate('homePlanet');
    return res.status(200).json(characters);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching characters', error });
  }
};

// Obter um personagem específico por ID
export const getCharacterById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const character = await Character.findById(id).populate('homePlanet');
    if (!character) return res.status(404).json({ message: 'Character not found' });
    return res.status(200).json(character);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching character', error });
  }
};

// Atualizar informações de um personagem
export const updateCharacter = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, race, affiliation, homePlanet } = req.body;
  try {
    const character = await Character.findByIdAndUpdate(id, { name, race, affiliation, homePlanet }, { new: true });
    if (!character) return res.status(404).json({ message: 'Character not found' });
    return res.status(200).json(character);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating character', error });
  }
};

// Deletar um personagem
export const deleteCharacter = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const character = await Character.findByIdAndDelete(id);
    if (!character) return res.status(404).json({ message: 'Character not found' });
    return res.status(200).json({ message: 'Character deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting character', error });
  }
};
