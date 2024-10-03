import { Router, Request, Response } from 'express';
import { StarSystem } from '../models/starSystem.model';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

// Criar um novo sistema estelar (POST /star-systems)
router.post('/', authenticateToken, async (req: Request, res: Response) => {
    try {
        const newStarSystem = new StarSystem(req.body);
        const savedStarSystem = await newStarSystem.save();
        res.status(201).json(savedStarSystem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Listar todos os sistemas estelares (GET /star-systems)
router.get('/', async (req: Request, res: Response) => {
    try {
        const starSystems = await StarSystem.find();
        res.status(200).json(starSystems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obter detalhes de um sistema estelar específico (GET /star-systems/:id)
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const starSystem = await StarSystem.findById(req.params.id);
        if (!starSystem) {
            return res.status(404).json({ message: 'Sistema estelar não encontrado' });
        }
        res.status(200).json(starSystem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Atualizar informações de um sistema estelar (PUT /star-systems/:id)
router.put('/:id', authenticateToken, async (req: Request, res: Response) => {
    try {
        const updatedStarSystem = await StarSystem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedStarSystem) {
            return res.status(404).json({ message: 'Sistema estelar não encontrado' });
        }
        res.status(200).json(updatedStarSystem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Deletar um sistema estelar (DELETE /star-systems/:id)
router.delete('/:id', authenticateToken, async (req: Request, res: Response) => {
    try {
        const deletedStarSystem = await StarSystem.findByIdAndDelete(req.params.id);
        if (!deletedStarSystem) {
            return res.status(404).json({ message: 'Sistema estelar não encontrado' });
        }
        res.status(200).json({ message: 'Sistema estelar excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
