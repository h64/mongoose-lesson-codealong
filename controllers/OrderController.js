const router = require('express').Router()

// GET /orders - Index
// GET /orders/:id - Show
// POST /orders

// Return just the data about the products in that order
// GET /orders/:orderId/products

// Return just the data about that ONE product inside of a particular order
// GET /orders/:orderId/products/:productId

// Add a product to an order
// POST /orders/:orderId/products

module.exports = router