const express = require('express');

const cors = require('cors');

const PORT = process.env.PORT || 8080;
const { connection } = require('./Config/db')

const { productRoute } = require('./Routes/product.route');
const { authRoute } = require('./Routes/user.route');

const app = express();
app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
    res.send("Welcome to home")
})

app.use("/products", productRoute)
app.use("/auth", authRoute)

app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Connected to db successfully")
    } catch (err) {
        console.log(err);
    }

    console.log(`listining on port ${PORT}`)
})