'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const router=express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('port', port);
//carregar as rotas
const indexRoute = require('./routes/index-route');
const listaRoute = require('./routes/lista-route');


app.use('/', indexRoute);
app.use('/tarefa', listaRoute);

//teste
module.exports = app;
