// interfaces

interface Author {
    name: string,
    avatar: string
}

const authorOne: Author = {name: 'Mario', avatar: ''}

interface Post {
    title: string,
    body: string,
    tags: string[],
    create_at: Date,
    author: Author
}

const newPost: Post = {
    title : 'MyFirstPost', 
    body: 'smth interesting', 
    tags: ['eating', 'sleeping'],
    create_at: new Date(),
    author: authorOne
}

// as function argument types

function createPost(post: Post): void {
    console.log(`Created Post ${post.title} by ${post.author.name}`)
}

createPost(newPost);

// with arrays

let posts: Post[] = []

posts.push(newPost)