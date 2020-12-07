const express = require('express');
const cors = require('cors');
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// MİDDLEWARES
app.use(cors())
app.use(bodyParser.json())
// MONGODB
const url = process.env.MONGO_URL || 'mongodb://localhost:27017/test';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

// HANDLE ROUTERS
const routes = require('./routes/routes');
app.use('/', routes)


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})