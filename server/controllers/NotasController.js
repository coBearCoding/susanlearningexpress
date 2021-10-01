const Notas = require('../models/Notas');

const getNotas = async (req, res )=>{
    const notas = await Notas.findAll();
    return res.json({
        'data': notas
    });
}

exports.getNotas = getNotas;