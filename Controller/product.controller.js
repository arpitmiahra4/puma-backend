const { ProductModel } = require('../Models/product.model')


const getTrending = async (req, res) => {
    const trending = await ProductModel.find({ trending: "yes" })
    res.send(trending)
}


const ProductController = { getTrending }

module.exports = { ProductController }
