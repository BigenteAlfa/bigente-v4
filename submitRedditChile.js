import { fetchDataReddit } from './fetchDataReddit.js';
import insertarDatosReddit from './persistDataReddit.js';

export async function submitRedditChile(req, res) {
    try {
        //const subreddits = ['chile', 'RepublicadeChile', 'Santiago', 'ChileIT', 'Chilefit'];
        const subreddits = ['chile'];
        const redditPosts = await fetchDataReddit(subreddits);
        await insertarDatosReddit(redditPosts);
        console.log('Script ejecutado correctamente.');
        //return res.status(200).send('Datos de Reddit insertados correctamente en la base de datos.');
    } catch (error) {
        console.error('Error en el proceso:', error);
        //res.status(500).send('Error en el proceso.');
    }
}