import { Router } from 'express';
import {
  getClientes,
  getclientesxid,
  postInsertarClientes,
  putClientes,
  patchClientes,
  deleteClientes
} from '../controladores/clientesCtrl.js';

import { verificarToken } from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/clientes', verificarToken, getClientes);
router.get('/clientes/:id', verificarToken, getclientesxid);
router.post('/clientes', verificarToken, postInsertarClientes);
router.put('/clientes/:id', verificarToken, putClientes);
router.patch('/clientes/:id', verificarToken, patchClientes);
router.delete('/clientes/:id', verificarToken, deleteClientes);

export default router;

