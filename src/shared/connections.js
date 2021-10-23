const mysql = require('mysql');
const host = process.env.dbhost;
const database = process.env.dbname;
const dbuser = process.env.dbuser;
const password= process.env.dbpass;

exports.databaseCredentials = {
    host: host,
    database: database,
    user: dbuser,
    password: password,
    dialect: 'mysql '
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
