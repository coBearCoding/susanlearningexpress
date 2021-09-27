const Notas = require('../models/Notas');

const getNotas = (req, res )=>{
    const notas = Notas.findAll();

    console.log(`Notas: ${notas}` );
}

exports.getNotas = getNotas;