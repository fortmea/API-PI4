'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const router=express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//carregar as rotas
const indexRoute = require('./routes/index-route');
const listaRoute = require('./routes/lista-route');


app.use('/', indexRoute);
app.use('/tarefa', listaRoute);

//teste
module.exports = app;
