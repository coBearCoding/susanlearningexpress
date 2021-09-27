const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('../database/database');

const Notas = sequelize.define('Notas',{
    notas_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo:{
        type: DataTypes.TEXT,
        allowNull: true,
    },
    descripcion:{
        type: DataTypes.TEXT,
        allowNull: true,
    },
    usuario_id:{
        type: DataTypes.INTEGER,
    }
},
{
    tableName: 'notas'
});

console.log(User === sequelize.models.Notas );

module.exports = Notas;