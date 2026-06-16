import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { conmysql } from '../db.js';
import { JWT_SECRET } from '../config.js';

export const login = async (req, res) => {
  try {
    const { usuario, password } = req.body;

    const [result] = await conmysql.query(
      'SELECT * FROM usuarios WHERE usr_usuario = ?',
      [usuario]
    );

    if (result.length === 0) {
      return res.status(401).json({
        message: 'Usuario incorrecto'
      });
    }

    const usuarioBD = result[0];

    const claveCorrecta = await bcrypt.compare(password, usuarioBD.usr_clave);

    if (!claveCorrecta) {
      return res.status(401).json({
        message: 'Contraseña incorrecta'
      });
    }

    const token = jwt.sign(
      {
        id: usuarioBD.usr_id,
        usuario: usuarioBD.usr_usuario,
        nombre: usuarioBD.usr_nombre
      },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.json({
      message: 'Login correcto',
      token: token
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Error en el servidor'
    });
  }
};