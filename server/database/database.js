const {Sequelize} =require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT
});


sequelize.authenticate()
.then(()=>{
    console.log(`DB CONNECTED`);
})
.catch((error)=>{
    console.log(`Error connecting: ${error}`);
});

module.exports = sequelize;