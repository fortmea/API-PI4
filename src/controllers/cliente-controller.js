'use strict';

const repository = require('../repositories/cliente-repository');
const md5 = require('md5');

exports.get = async(req, res, next) => {
    const codigo = req.params.id
    console.log(codigo)
    try {
        var data = await repository.get(codigo);
        res.status(200).send(data);
    } catch (e) { 
        res.status(400).send(e);
    }
}

exports.post = async(req, res, next) => {
    try {
         var data = await repository.create({
             USR_EMAIL:   req.body.USR_EMAIL   ,
            USR_SENHA:   md5(req.body.USR_SENHA) 
         });
        res.status(201).send({
            message: 'OK'
        });
    } catch (e) {
        res.status(400).send({
            message: 'NOK',
            data: e
        });
    }
}
