import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config.js';

export const verificarToken = (req, res, next) => {
  const header = req.headers['authorization'];

  if (!header) {
    return res.status(401).json({
      message: 'Token no enviado'
    });
  }

  const token = header.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      message: 'Token inválido'
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (error) {
    return res.status(403).json({
      message: 'Token no válido o expirado'
    });
  }
};