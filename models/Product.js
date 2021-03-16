const mongoose = require('mongoose')

// Step 1 - Define the Schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number
}, {
    timestamps: true
})

// Step 2 - Generate a model based off the schema
const Product = mongoose.model('Product', productSchema)

// Step 3 - export the model
module.exports = Product