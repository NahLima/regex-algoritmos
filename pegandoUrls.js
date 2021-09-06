let photos = [];

async function getPhotos(pageNumber = 1, shouldGetNextPage = true) {    
    fetch(`site/wp-json/wp/v2/posts?page=${pageNumber}&per_page=50&fields=content,slug`).then(response => response.json())
    .then(async posts => {
        const photosMatched = posts.forEach(post => {
            const matchedList = post.content.rendered.match(/<img[^>]+src=["']([^"']+)/gi);
            if(matchedList !== null) {
                matchedList.forEach(matched => {
                    photos.push({
                        post: post.slug,
                        image: matched.match(/src=["']([^"']+)/i)[1]
                    })
                })
            }
        });        
        console.log(`Checando página ${pageNumber}. ${photos.length} fotos encontradas até agora.`);
        if(shouldGetNextPage) {            
            await getPhotos(pageNumber + 1, posts.length > 0)
        } else {
            console.log(`Finalizado! Encontradas ${photos.length} em ${pageNumber} páginas ...`);
        }
    })
}