'use strict'

const cert = process.env.certfile;
const certkey = process.env.certkey;

const app = require('../src/app')
if (!cert) {
    const http = require('http');
} else {
    const https = require('https');
}
const { normalize } = require('path');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
var server;
if (!cert) {
    server = http.createServer(app);
} else {
    server = https.createServer({
        key: fs.readFileSync(certkey),
        cert: fs.readFileSync(cert),
    }, app);
}
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