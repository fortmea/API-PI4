const mysql = require('mysql');

exports.databaseCredentials = {
    host: process.env.dbhost,
    database: process.env.dbname,
    user: process.env.dbuser,
    password: process.env.dbpass,
    dialect: process.env.dbdialect
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
