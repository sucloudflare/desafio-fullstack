import { Router, Request, Response } from 'express';
import { Spaceship } from '../models/spaceship.model';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

// Criar uma nova nave espacial (POST /spaceships)
router.post('/', authenticateToken, async (req: Request, res: Response) => {
    try {
        const newSpaceship = new Spaceship(req.body);
        const savedSpaceship = await newSpaceship.save();
        res.status(201).json(savedSpaceship);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Listar todas as naves espaciais (GET /spaceships)
router.get('/', async (req: Request, res: Response) => {
    try {
        const spaceships = await Spaceship.find();
        res.status(200).json(spaceships);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obter detalhes de uma nave específica (GET /spaceships/:id)
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const spaceship = await Spaceship.findById(req.params.id);
        if (!spaceship) {
            return res.status(404).json({ message: 'Nave não encontrada' });
        }
        res.status(200).json(spaceship);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Atualizar informações de uma nave espacial (PUT /spaceships/:id)
router.put('/:id', authenticateToken, async (req: Request, res: Response) => {
    try {
        const updatedSpaceship = await Spaceship.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSpaceship) {
            return res.status(404).json({ message: 'Nave não encontrada' });
        }
        res.status(200).json(updatedSpaceship);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Deletar uma nave espacial (DELETE /spaceships/:id)
router.delete('/:id', authenticateToken, async (req: Request, res: Response) => {
    try {
        const deletedSpaceship = await Spaceship.findByIdAndDelete(req.params.id);
        if (!deletedSpaceship) {
            return res.status(404).json({ message: 'Nave não encontrada' });
        }
        res.status(200).json({ message: 'Nave excluída com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
