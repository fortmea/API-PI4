const mysql = require('mysql');
const config = require('./config.json');
const host = config.dbhost || '127.0.0.1';
const database = config.dbname || 'cliente';
const dbuser = config.dbuser || 'root';
const password= config.dbpass || '1234';
console.log(database)
exports.databaseCredentials = {
    host: host,
    database: database,
    user: dbuser,
    password: password,
    dialect: 'mysql'
};

const {Sequelize, Model, DataTypes} = require('sequelize');
exports.sequelize = new Sequelize(
    exports.databaseCredentials.database,
    exports.databaseCredentials.user,
    exports.databaseCredentials.password,
    {
        host: exports.databaseCredentials.host,
        dialect: exports.databaseCredentials.dialect
    });

exports.Usuario = require('../models/cliente').init(exports.sequelize, Sequelize);
