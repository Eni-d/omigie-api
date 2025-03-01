const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require('./routes/router');
const path = require('path');
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")

// Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use('/api', routes);

//Database
// mongoose.connect("mongodb://0.0.0.0:27017/omigie", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

mongoose.connect('mongodb+srv://dbDaniel:dbDaniel@cluster0.rcsbe.mongodb.net/omigie?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
