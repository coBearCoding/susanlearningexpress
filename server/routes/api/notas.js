const express = require('express');
const router = express.Router();
const NotasController = require('../../controllers/NotasController');

router.get('/', NotasController.getNotas);

module.exports = router;