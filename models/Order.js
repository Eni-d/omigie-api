const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    product: {
        type: String
    },
    quantity: {
        type: String
    },
    address: {
        type: String
    },
    companyName: {
        type: String
    }
})

const Order = mongoose.model("Order", orderSchema)

module.exports = Order