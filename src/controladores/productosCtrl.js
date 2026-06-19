import { conmysql } from '../db.js';

export const getProductos = async (req, res) => {
  try {
    const [result] = await conmysql.query('SELECT * FROM productos');
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

export const crearProducto = async (req, res) => {
  try {
    const { prod_codigo, prod_nombre, prod_stock, prod_precio, prod_imagen } = req.body;

    const [result] = await conmysql.query(
      `INSERT INTO productos 
      (prod_codigo, prod_nombre, prod_stock, prod_precio, prod_activo, prod_imagen)
      VALUES (?, ?, ?, ?, 1, ?)`,
      [prod_codigo, prod_nombre, prod_stock, prod_precio, prod_imagen]
    );

    res.json({ message: 'Producto registrado correctamente', id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

export const actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { prod_codigo, prod_nombre, prod_stock, prod_precio, prod_imagen } = req.body;

    await conmysql.query(
      `UPDATE productos 
       SET prod_codigo=?, prod_nombre=?, prod_stock=?, prod_precio=?, prod_imagen=?
       WHERE prod_id=?`,
      [prod_codigo, prod_nombre, prod_stock, prod_precio, prod_imagen, id]
    );

    res.json({ message: 'Producto actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

export const eliminarProducto = async (req, res) => {
  try {
    const { id } = req.params;

    await conmysql.query('DELETE FROM productos WHERE prod_id=?', [id]);

    res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
};