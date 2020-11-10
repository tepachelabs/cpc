const axios = require('axios').default;

const INSTAGRAM_URL = 'https://www.instagram.com/explore/tags/cultoperrocafe/?__a=1';
let instagramPosts = {};

async function fetchInstagramPosts() {
    try {
        const response = await axios.get(INSTAGRAM_URL);

        let posts = [];
        response.data.graphql.hashtag.edge_hashtag_to_media.edges.forEach(({node}) => {
            if (node['owner']['id'] !== '37716221215' || node['is_video']) return;
            posts.push({
                id: node['id'],
                image: node['thumbnail_src'],
                thumb: node['thumbnail_resources'][1]['src'],
                alt: node['accessibility_caption'],
                url: `https://www.instagram.com/p/${node['shortcode']}/`
            });
        });
        return posts;
    } catch (error) {
        console.error(error);
    }
}

function getInstagramPosts() {
    if (Object.keys(instagramPosts).length === 0) {
        fetchInstagramPosts().then(posts => {
            posts.forEach(post => instagramPosts[post.id] = post);
        });
    }
    return Object.values(instagramPosts);
}

function refreshInstagramPosts() {
    instagramPosts = {};
    fetchInstagramPosts().then(posts => {
        posts.forEach(post => instagramPosts[post.id] = post);
    });
}

module.exports = { getInstagramPosts, refreshInstagramPosts };
