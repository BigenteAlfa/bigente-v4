import express from 'express';
import { submitRedditChile } from '../submit_reddit_chile.js';

const app = express();

// Definir la ruta para ejecutar la función submitRedditChile
app.get('/submit-reddit-chile', async (req, res) => {
  try {
    await submitRedditChile(req, res);
    return res.status(200).send('La función submitRedditChile se ejecutó correctamente.');
  } catch (error) {
    console.error('Error al ejecutar la función submitRedditChile:', error);
    //res.status(500).send('Ocurrió un error al ejecutar la función submitRedditChile.');
  }
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor Express escuchando en el puerto 3000');
});