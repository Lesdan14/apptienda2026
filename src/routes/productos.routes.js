import { Router } from 'express';
import { getProductos, crearProducto, actualizarProducto, eliminarProducto } from '../controladores/productosCtrl.js';
import { verificarToken } from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/productos', verificarToken, getProductos);
router.post('/productos', verificarToken, crearProducto);
router.put('/productos/:id', verificarToken, actualizarProducto);
router.delete('/productos/:id', verificarToken, eliminarProducto);

export default router;