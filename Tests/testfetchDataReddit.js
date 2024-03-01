import fetchDataReddit from '../fetchDataReddit.js';

async function testFetchDataReddit() {
    //const subreddits = ['chile', 'RepublicadeChile', 'Santiago', 'ChileIT', 'Chilefit'];
    const subreddits = ['chile'];
    try {
        const data = await fetchDataReddit(subreddits);
        data.forEach(listing => {
            console.log(`Contenido de Listing (${listing.length} publicaciones):`);
            listing.forEach(post => {
                console.log('ID:', post.id);
                console.log('Título:', post.title);
                console.log('Subreddit:', post.subreddit);
                console.log('Texto:', post.selftext);
                console.log('Thumbnail:', post.thumbnail);
                console.log('Puntaje:', post.score);
                console.log('URL:', post.url);
                console.log('Created UTC:', post.created_utc);
                console.log('---------------');
            });
        });
    } catch (error) {
        console.error('Error al obtener datos de Reddit:', error);
    }
}

testFetchDataReddit();