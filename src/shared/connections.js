const mysql = require('mysql');
const fs = require('fs')
let config = requir('config.json')
const host = config.dbhost || '127.0.0.1';
const database = config.dbname || 'cliente';
const dbuser = config.dbuser || 'root';
const password= config.dbpass || '1234';
const port = 3306;
console.log(database)
exports.databaseCredentials = {
    host: host,
    database: database,
    user: dbuser,
    password: password,
    dialect: 'mysql'
};
async function initialize() {
    // create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    // init models and add them to the exported db object
    db.User = require('../users/user.model')(sequelize);

    // sync all models with database
    await sequelize.sync();
}
initialize();
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
