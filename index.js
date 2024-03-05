import { fetchDataReddit } from './fetchDataReddit.js';
import persistDataReddit from './persistDataReddit.js';
import topicsReddit from './selectedSources/sourcesReddit.js';

export async function submitRedditChile(req, res) {
    try {
        //const subreddits = ['chile', 'RepublicadeChile', 'Santiago', 'ChileIT', 'Chilefit'];
        const subreddits = topicsReddit.chile;
        const redditPosts = await fetchDataReddit(subreddits);
        await persistDataReddit(redditPosts);
        console.log('submitDataReddit ejecutado correctamente.');
        return res.status(200).send('Datos de Reddit insertados correctamente en la base de datos.');
    } catch (error) {
        console.error('Error en submitDataReddit:', error);
        res.status(500).send('Error en el proceso.');
    }
}