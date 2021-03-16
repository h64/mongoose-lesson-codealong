const mongoose = require('mongoose')

// Step 1 - Define the Schema!
const postSchema = new mongoose.Schema({
    content: String
})

// Step 2 - Generate the Model!
const Post = mongoose.model('Post', postSchema)

// Step 3 - Export it!
module.exports = Post