var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();
var pingrDev = 'pingr-dev.herokuapp.com';
var pingrBen = 'pingr-ben.herokuapp.com';

proxy.on('proxyReq', function(proxyReq, req, res, options) {
    proxyReq.setHeader('Host', pingrDev);
    console.log(proxyReq);
});

app.all("/app1/*", function(req, res) {
    console.log('redirecting to pingrDev');
    proxy.web(req, res, {target: `https://${pingrDev}`});
});

app.all("/app2/*", function(req, res) {
    console.log('redirecting to pingrBen');
    proxy.web(req, res, {target: `https://${pingrBen}`});
});

app.get('/', (req, res) => {
    res.send('ok');
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Listening on port ${process.env.PORT||3000}`);
});