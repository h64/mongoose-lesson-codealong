require('./models')

const Order = require('./models/Order')
const Product = require('./models/Product')

async function createOrderWithProducts() {
    const productA = await Product.create({
        name: 'Lays Chips',
        price: 10
    })

    const productB = await Product.create({
        name: 'Corsair Gaming Mouse',
        price: 40
    })

    const order = await Order.create({
        title: 'My Amazon Order',
        products: [productA, productB]
    })

    console.log(order)
}
// createOrderWithProducts()

async function getOrderWithProducts() {
    let id = '605123cbbde6ee10da8439c6'
    const order = await Order.findById(id).populate('products')
    console.log(order)
}
getOrderWithProducts()