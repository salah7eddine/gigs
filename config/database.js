const Sequelize = require('sequelize');

// for mysql we can set the name to root and dialect to mysql 
//module.export to have access to another files
module.exports = new Sequelize('codegig', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});