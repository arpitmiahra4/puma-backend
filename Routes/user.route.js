const { Router } = require('express')
const { loginUser, registerUser } = require('../Controller/user.controller')
const authRoute = Router()



authRoute.post("/register", registerUser)
authRoute.post("/login", loginUser)


module.exports = { authRoute }