const router = require('express').Router()
const Post = require('../models/Post')

// Create 
router.post('/', async (req, res) => {
    const newPost = await Post.create({
        content: req.body.content
    })
    res.json(newPost)
})

// Read (Show)
router.get('/:id', async (req, res) => {
    try {
        const foundPost = await Post.findById(req.params.id)
        console.log(foundPost)
        if(foundPost) {
            res.json(foundPost)
        }
    } catch (err) {
        res.json({
            msg: 'could not find'
        })
    }
})

// Read (Index)
router.get('/', async (req, res) => {
    const allPosts = await Post.find({})
    res.json(allPosts)
})

// Update
router.put('/:id', async (req, res) => {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
        content: req.body.content
    })
    res.json(updatedPost)
})

// Delete
router.delete('/:id', async (req, res) => {
    const deletedPost = await Post.findByIdAndDelete(req.params.id)
    res.json(deletedPost)
})


module.exports = router