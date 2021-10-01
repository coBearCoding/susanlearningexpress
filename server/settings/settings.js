require('../database/database');
const express = require('express');
const app = express();


const notasApiRoute = require('../routes/api/notas');


app.use('/api/notas', notasApiRoute);

module.exports = app;