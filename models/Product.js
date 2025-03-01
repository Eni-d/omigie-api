const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    companyName: {
        type: String
    }
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product