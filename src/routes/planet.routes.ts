import { Router } from 'express';
import { createPlanet } from '../controllers/planet.controller';

const router = Router();

router.post('/planets', createPlanet);
// Outras rotas para listar, obter por ID, atualizar e deletar

export default router;
