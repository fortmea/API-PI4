'use strict'

const cert = process.env.certfile;
const certkey = process.env.certkey;
var cors = require('cors')
const app = require('../src/app')
app.use(cors())
const http = require('http');
const https = require('https');
const { normalize } = require('path');
const fs = require('fs');
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
var server;
/*console.log(cert);
console.log(certkey);
if (!cert) {
    server = http.createServer(app);
} else {*/
    server = https.createServer({
        key: fs.readFileSync('/home/admin/key/privkey.pem'),
        cert: fs.readFileSync('/home/admin/key/fullchain.pem'),
    }, app);
/*}*/
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
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