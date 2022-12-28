const { Schema, model } = require('mongoose')


const productSchema = new Schema({
    category: { type: 'string', required: true },
    title: { type: 'string', required: true },
    price: { type: 'number', required: true },
    actual_price: { type: 'number', required: true },
    sizes: { type: 'array', required: true },
    images: { type: 'array', required: true },
    trending: { type: 'string' }
})


const ProductModel = model("product", productSchema)

module.exports = { ProductModel }