const mydb = require('../shared/connections');
const {Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = mydb.sequelize;

module.exports = class Lista extends Model{
    static init(sequelize, DataTypes){
        return super.init({
            ITEM_ID: {
                type: Sequelize.INTEGER,
                primaryKey: true,
            },
            ITEM_DESC: {
                type: Sequelize.STRING,
                trim: true,
            }
        },
            {
                sequelize,
                freezeTableName: true,
                timestamps: false,
                modelName: 'Tarefa'
            });
      
    }
}