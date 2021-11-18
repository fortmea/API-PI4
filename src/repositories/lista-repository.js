'use strict';

const mydb = require('../shared/connections');
const Lista = mydb.Lista;

exports.get = async(codigo) => {
    var res;
    if(codigo == -1){
        res = await Lista.findAll();
    }else {
        res = await Lista.findOne({
            where: {
                ITEM_ID: codigo
            }
        });
    }
    return res;
}

exports.create = async(data) =>{
    console.log(data);
    return await Lista.create(data);
}

exports.put = async(id, data) =>{
    console.log(data);
    var res = await Lista.update(
        data,
        {
            where: {
                ITEM_ID: id
            }
        });
    return res;
}

exports.delete = async(id) => {

    var res = await Lista.destroy({
        where: {
            ITEM_ID: id
        }
    });
    return res;
}