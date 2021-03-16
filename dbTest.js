require('./models') // connect to DB
const Post = require('./models/Post')

// CRUD
// Create, Read (Index), Read (Show), Update, Delete

// HTTP VERBS
// Post, Put, Delete, Get

// CREATE
async function createPost() {
    // 2 ways to create a Post
    
    // Method # 1:
    // Creates a post object in-memory, but doesn't actually
    // make it in the database yet
    let post = new Post({
        content: 'Wow, this is such a great post!'
    })
    // Save the post object in the database
    let savedPost = await post.save()
    console.log(savedPost)

    // Method # 2:
    // Create the post in line command instead of two
    const newPost = await Post.create({
        'content': 'This is another cool post'
    })
    console.log(newPost)
}
createPost()

// Read (Index)
async function index() {
    const allPosts = await Post.find({})
    console.log(allPosts)
}
// index()

async function show() {
    const post = await Post.findOne({
        content: 'This is another cool post'
    })
    console.log(post)
}
// show()

async function update() {
    const updatedPost = await Post.findOneAndUpdate({
        content: 'This is another cool post'
    }, {
        content: 'This post has been updated!'  
    })
    console.log(updatedPost)
}
// update()

async function deletePost() {
    const deletedPost = await Post.deleteOne({
        content: 'Wow, this post really sucks!'
    })
}
// deletePost()