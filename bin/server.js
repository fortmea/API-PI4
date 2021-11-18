'use strict'

const cert = process.env.certfile;
const certkey = process.env.certkey;
const cors = require('cors');
const app = require('../src/app');
app.use(cors());
const http = require('http');
const https = require('https');
const { normalize } = require('path');
const fs = require('fs');
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
    const server = https.createServer({
        key: fs.readFileSync('/home/admin/key/privkey.pem'),
        cert: fs.readFileSync('/home/admin/key/fullchain.pem'),
    }, app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('Rodando na porta ' + port);

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

function onError(e) {
    'Erro:' + e;
}
function onListening(e) {
    'Pronto';
}