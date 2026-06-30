import { Router } from 'express';
import { verificarToken } from '../middlewares/authMiddleware.js';
import { guardarPedido } from '../controladores/pedidosCtrl.js';

const router = Router();

router.post('/guardarPedido', verificarToken, guardarPedido);

export default router;