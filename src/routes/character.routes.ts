import { Router, Request, Response } from 'express';
import { Character } from '../models/character.model';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

// Criar um novo personagem (POST /characters)
router.post('/', authenticateToken, async (req: Request, res: Response) => {
    try {
        const newCharacter = new Character(req.body);
        const savedCharacter = await newCharacter.save();
        res.status(201).json(savedCharacter);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Listar todos os personagens (GET /characters)
router.get('/', async (req: Request, res: Response) => {
    try {
        const characters = await Character.find();
        res.status(200).json(characters);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obter detalhes de um personagem específico (GET /characters/:id)
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const character = await Character.findById(req.params.id);
        if (!character) {
            return res.status(404).json({ message: 'Personagem não encontrado' });
        }
        res.status(200).json(character);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Atualizar informações de um personagem (PUT /characters/:id)
router.put('/:id', authenticateToken, async (req: Request, res: Response) => {
    try {
        const updatedCharacter = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCharacter) {
            return res.status(404).json({ message: 'Personagem não encontrado' });
        }
        res.status(200).json(updatedCharacter);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Deletar um personagem (DELETE /characters/:id)
router.delete('/:id', authenticateToken, async (req: Request, res: Response) => {
    try {
        const deletedCharacter = await Character.findByIdAndDelete(req.params.id);
        if (!deletedCharacter) {
            return res.status(404).json({ message: 'Personagem não encontrado' });
        }
        res.status(200).json({ message: 'Personagem excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
