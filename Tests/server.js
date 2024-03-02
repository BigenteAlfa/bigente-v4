import express from 'express';
import { submitRedditChile } from '../submitRedditChile.js';

const app = express();

app.get('/submit-reddit-chile', async (req, res) => {
  try {
    await submitRedditChile(req, res);
  } catch (error) {
    console.error('Error en el servidor al ejecutar la función submitRedditChile:', error);
  }
});

app.listen(3000, () => {
  console.log('Servidor Express escuchando en el puerto 3000');
});