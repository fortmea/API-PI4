const mysql = require('mysql');
const fs = require('fs')
const host = process.env.dbhost || '127.0.0.1';
const database = process.env.dbname || 'cliente';
const user = process.env.dbuser || 'root';
const password= process.env.dbpass || '1234';
const port = 3306;
console.log(database)
exports.databaseCredentials = {
    host: host,
    database: database,
    user: user,
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

exports.Usuario = require('../models/lista').init(exports.sequelize, Sequelize);
