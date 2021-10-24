'use strict';

const repository = require('../repositories/cliente-repository');
const md5 = require('md5');
exports.default = async (req, res) => {
    return res.send({});
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
        if (!req.body.USR_EMAIL || req.body.USR_EMAIL == "") {
            return res.status(400).send({ error: true, message: "Email é um campo obrigatório." });
        }
        if (!req.body.USR_SENHA || req.body.USR_SENHA == "") {
            return res.status(400).send({ error: true, message: "Senha é um campo obrigatório." });
        }
        var data = await repository.create({
            USR_EMAIL: req.body.USR_EMAIL,
            USR_SENHA: md5(req.body.USR_SENHA)
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
        if (!req.body.USR_ID || req.body.USR_ID == "") {
            return res.status(400).send({ error: true, message: "Usuário não encontrado.", USR_ID: req.body.USR_ID });
        }
        var data = await repository.delete(req.body.USR_ID);
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
        if (!req.body.USR_ID || req.body.USR_ID == "") {
            return res.status(400).send({ error: true, message: "Usuário não encontrado.", USR_ID: req.body.USR_ID });
        }
        if (!req.body.USR_EMAIL || req.body.USR_EMAIL == "") {
            return res.status(400).send({ error: true, message: "Email é um campo obrigatório." });
        }
        if (!req.body.USR_SENHA || req.body.USR_SENHA == "") {
            return res.status(400).send({ error: true, message: "Senha é um campo obrigatório." });
        }
        var n_usuario = {
            USR_EMAIL: req.body.USR_EMAIL,
            USR_SENHA: md5(req.body.USR_SENHA)
        }
        var data = await repository.put(req.body.USR_ID, n_usuario)
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