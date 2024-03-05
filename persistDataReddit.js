import config from './config.js';
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool(config.db);

async function persistDataReddit(posts) {
    const client = await pool.connect();

    try {
        await Promise.all(posts.map(async (listing) => {
            await Promise.all(listing.map(async (post) => {
                const query = `
                    INSERT INTO db_reddit_chile (id, title, subreddit, selftext, thumbnail, score, url, time_created, time_added)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW() AT TIME ZONE 'America/Santiago')
                    ON CONFLICT (id) DO UPDATE
                    SET score = EXCLUDED.score, time_edited = CURRENT_TIMESTAMP AT TIME ZONE 'UTC' AT TIME ZONE 'America/Santiago'
                    RETURNING time_edited;
                `;
                const values = [post.id, post.title, post.subreddit, post.selftext, post.thumbnail, post.score, post.url, post.created_utc];
                await client.query(query, values);
            }));
        }));

        console.log(`persistDataReddit ejecutado correctamente.`);
    } catch (error) {
        console.error('Error en persistDatReddit:', error);
    } finally {
        client.release();
    }
}

export default persistDataReddit;