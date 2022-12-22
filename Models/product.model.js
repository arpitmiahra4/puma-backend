const { Schema, model } = require('mongoose')


const productSchema = new Schema({

})


const ProductModel = model("product", productSchema)

module.exports = { ProductModel }