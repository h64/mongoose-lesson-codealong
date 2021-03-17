const router = require('express').Router()
const Order = require('../models/Order')
const Product = require('../models/Product')


// GET /orders - Index
router.get('/' , async (req, res) => {
    const orders = await Order.find({}).populate('products')
    res.json(orders)
})

// GET /orders/:id - Show
router.get('/:id' , async (req, res) => {
    const order = await Order.findById(req.params.id).populate('products')  
    res.json(order)
})

// POST /orders
router.post('/', async (req, res) => { 
    const newOrder = await Order.create({
        title: req.body.title
    })
    res.json(newOrder)
})

// Return just the data about the products in that order
// GET /orders/:orderId/products
router.get('/:orderId/products', async (req, res) => {
    let id = req.params.orderId
    const order = await Order.findById(id).populate('products')
    res.json(order.products)
})

// Return just the data about that ONE product inside of a particular order
// GET /orders/:orderId/products/:productId
router.get('/:orderId/products/:productId', async (req, res) => {
    const order = await Order.findById(req.params.orderId).populate({
        path: 'products',
        match: { _id: req.params.productId }
    })
    res.json(order.products)
})

// Add a product to an order
// POST /orders/:orderId/products
router.post('/:orderId/products', async (req, res) => {
    const id = req.params.orderId
    const order = await Order.findById(id).populate('products')
    if(order) {
        const newProduct = await Product.create({
            name: req.body.name,
            price: req.body.price
        })
        order.products.push(newProduct)
        const updatedOrder = await order.save()
        res.json(updatedOrder)
    }
})

module.exports = router