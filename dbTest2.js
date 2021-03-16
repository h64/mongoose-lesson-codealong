require('./models')
const { Post, Comment } = require('./models/Post')

// Create a Post w/ a comment
async function createPost() {
    // Method 1 - new Post, then .save()
    // Creating the new Post in-memory (aka NOT in the database yet)
    const post = new Post({
        title: '5 Reasons why X is better than Y',
        content: 'A whole bunch of nonsense'
    })
    // Add a comment to it
    post.comments.push({
        content: 'Cool post!',
        rating: 5
    })
    // Save it to the database
    const newPost = await post.save()
    // console.log(newPost)

    // Method 2 - .create() w/ the comment data directly inputted
    const newPost = await Post.create({
        title: 'Yet another post',
        content: 'Extraordinarily intriguing stuff',
        comments: [{
            content: 'Great Post!',
            rating: 4
        }]
    })
    // console.log(newPost)

    // Method 3 - create Post, then create Comment, the associate the two
    const anotherNewPost = new Post({ // create a post in-memory
        title: 'Rapidly running out of creative titles',
        content: 'Mongoose is fun!'
    })
    const comment = new Comment({
        content: 'Okay post i guess',
        rating: 2
    })
    anotherNewPost.comments = [comment]
    await anotherNewPost.save() // this is asynchronous - it takes the data, and sends it 
    // to the DB
    console.log(anotherNewPost)
}
// createPost();