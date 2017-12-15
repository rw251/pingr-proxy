var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();
var pingrDev = 'pingr-dev.herokuapp.com';
var pingrBen = 'pingr-ben.herokuapp.com';

app.get('/a', (req, res) => {
    res.send('ok');
});

app.all("/beta*", function(req, res) {
    console.log('redirecting to pingrDev');
    proxy.web(req, res, {target: `https://${pingrDev}`, changeOrigin: true});
});

app.all("/*", function(req, res) {
    console.log('redirecting to pingrBen');
    proxy.web(req, res, {target: `https://${pingrBen}`, changeOrigin: true});
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Listening on port ${process.env.PORT||3000}`);
});