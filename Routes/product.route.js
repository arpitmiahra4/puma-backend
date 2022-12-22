const { ProductController } = require("../Controller/product.controller")

const { Router } = require("express")

const productRoute = Router()



productRoute.get("/trending", ProductController.getTrending)


module.exports = { productRoute }