import { Router } from 'express';
import { getProductos, crearProducto } from '../controladores/productosCtrl.js';
import { verificarToken } from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/productos', verificarToken, getProductos);
router.post('/productos', verificarToken, crearProducto);

export default router;