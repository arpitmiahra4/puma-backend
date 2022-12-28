const { ProductController } = require("../Controller/product.controller")

const { Router } = require("express")

const productRoute = Router()


productRoute.get("/", ProductController.getProduct)
productRoute.get("/trending", ProductController.getTrending)
productRoute.get("/:id", ProductController.getSingleProduct)





module.exports = { productRoute }