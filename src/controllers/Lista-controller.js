'use strict';

const repository = require('../repositories/lista-repository');
const md5 = require('md5');
exports.default = async (req, res) => {
    return res.send(req.body);
}
exports.get = async (req, res, next) => {
    const codigo = req.params.id
    try {
        var data = await repository.get(codigo);
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send(e);
    }
}

exports.post = async (req, res, next) => {
    try {
        if (!req.body.ITEM_DESC || req.body.ITEM_DESC == "") {
            return res.status(400).send({ error: true, message: "Descrição é um campo obrigatório." });
        }
        var data = await repository.create({
            ITEM_DESC: req.body.ITEM_DESC,
 
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

exports.delete = async (req, res) => {
    try {
        if (!req.body.ITEM_ID || req.body.ITEM_ID == "") {
            return res.status(400).send({ error: true, message: "Item não encontrado.", ITEM_ID: req.body.ITEM_ID });
        }
        var data = await repository.delete(req.body.ITEM_ID);
        res.status(200).send({
            message: 'OK'
        })
    } catch (e) {
        res.status(400).send({
            message: 'NOK',
        })
    }

}

exports.put = async (req, res) => {
    try {
        if (!req.body.ITEM_ID || req.body.ITEM_ID == "") {
            return res.status(400).send({ error: true, message: "Item não encontrado.", ITEM_ID: req.body.ITEM_ID });
        }
        if (!req.body.ITEM_DESC || req.body.ITEM_DESC == "") {
            return res.status(400).send({ error: true, message: "Corpo é um campo obrigatório." });
        }

        var n_item = {
            ITEM_DESC: req.body.ITEM_DESC
        }
        var data = await repository.put(req.body.ITEM_ID, n_item)
        res.status(200).send({
            message: 'OK'
        })
    } catch (e) {
        res.status(400).send({
            message: 'NOK',
            data: e
        })
    }
}