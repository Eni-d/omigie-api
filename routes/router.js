const express = require('express');
const router = express.Router();
const User = require("../models/Register")
const Product = require("../models/Product")
const Order = require("../models/Order")

// Define routes
router.get('/', (req, res) => {
    res.send('Welcome to the API');
});

router.post('/register', (req, res) => {
    User.create(req.body)
    .then(user => {
        res.send({
            msg: "Success",
            user
        })
    })
    .catch(err => console.log(err))
});

router.post("/login", (req, res) => {
    User.findOne({companyName: req.body.companyName, password: req.body.password })
    .then(user => {
        res.send({
            msg: "Success",
            user
        })
    })
    .catch(err => console.log(err))
})

router.post('/registerProduct', (req, res) => {
    Product.create(req.body)
    .then(user => {
        res.send({
            msg: "Success",
            user
        })
    })
    .catch(err => console.log(err))
});

router.get("/getProducts", (req, res) => {
    Product.find({})
    .then(products => {
        res.send({
            msg: "Success",
            products
        })
    })
    .catch(err => console.log(err))
})

router.post('/order', (req, res) => {
    Order.create(req.body)
    .then(order => {
        res.send({
            msg: "Success",
            order
        })
    })
    .catch(err => console.log(err))
});

router.get("/getOrders/:id", (req, res) => {
    Order.find({ companyName: req.params.id })
    .then(orders => {
        res.send({
            msg: "Success",
            orders
        })
    })
    .catch(err => console.log(err))
})

module.exports = router;
