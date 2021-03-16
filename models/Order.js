const mongoose = require('mongoose')

// Step 1 - define the Schema
const orderSchema = new mongoose.Schema({
    title: String,
    products: [{ //Defining a 1:M relationship via a reference
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

// Step 2 - make the model
const Order = mongoose.model('Order', orderSchema)

// Step 3 - export
module.exports = Order