const { ProductModel } = require('../Models/product.model')


const getTrending = async (req, res) => {
    const trending = await ProductModel.find({ trending: "yes" })
    res.send(trending)
}

const getProduct = async (req, res) => {
    // console.log(req.query)
    const { category } = req.query
    const page = parseInt(req.query.page) || 0
    const limit = parseInt(req.query.limit) || 100
    const skip = limit * page;
    const product = await ProductModel.find({ category: category }).skip(skip).limit(limit)
    // const totalPage = Math.ceil(product.length / limit);
    res.send(product)
}


const ProductController = { getTrending, getProduct }

module.exports = { ProductController }
