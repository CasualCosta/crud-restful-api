const express = require("express")
const mongoose = require("mongoose")
const Product = require("./models/product.model")
const app = express()


app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello from Node API updated")
})

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
        // console.log(error)
    }
})

mongoose.connect('mongodb+srv://Felipe:x6sYBSCxperaPEKK@backenddb.kn98cht.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
.then(() => {
    console.log("Connected to database")
    app.listen(3000, () => {
        console.log("Server running on port 3000")
    })
})
.catch(() => {
    console.log("Failed to connect")
})