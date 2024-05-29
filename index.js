const express = require("express")
const mongoose = require("mongoose")
const productRoute = require("./routes/product.route")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/products", productRoute)

app.get('/', (req, res) => {
    res.send("Hello from Node API updated")
})


mongoose.connect('mongodb+srv://Felipe:x6sYBSCxperaPEKK@backenddb.kn98cht.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
.then(() => {
    console.log("Connected to database")
    app.listen(3000, () => {
        console.log("Server running on port 3000. Access through: http://localhost:3000/")
    })
})
.catch(() => {
    console.log("Failed to connect")
})