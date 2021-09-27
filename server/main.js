const express = require('express');
const app = express();
const settings = require('./settings/settings');

require('dotenv').config();

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Project started in port: ${PORT}`)
});