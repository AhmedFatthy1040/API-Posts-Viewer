async function fetchPosts() {
    try {
        const response = await fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=21&context=embed');
        const data = await response.json();

    let postDiv = document.getElementById('postsContainer');
    let html = '';

    data.forEach(post => {
        html += `
            <div class="post">
                <img class="postImg" src="${post.jetpack_featured_media_url}" alt="Post Image">
                <a href="${post.link}" target="_blank">
                    <h3>${post.title.rendered}</h3>
                </a>
                <p>${post.excerpt.rendered}</p>
            </div>
        `;
    });

    postDiv.innerHTML = html;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchPosts();

