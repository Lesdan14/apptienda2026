import express from 'express';
import cors from 'cors';
import clientesRoutes from './routes/clientes.routes.js';
import authRoutes from './routes/auth.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', clientesRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: 'Endpoint not found'
  });
});

export default app;