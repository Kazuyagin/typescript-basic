"use strict";
// interfaces
const authorOne = { name: 'Mario', avatar: '' };
const newPost = {
    title: 'MyFirstPost',
    body: 'smth interesting',
    tags: ['eating', 'sleeping'],
    create_at: new Date(),
    author: authorOne
};
// as function argument types
function createPost(post) {
    console.log(`Created Post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
// with arrays
let posts = [];
posts.push(newPost);
