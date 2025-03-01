const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    companyName: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    }
})

const User = mongoose.model("User", userSchema)

module.exports = User