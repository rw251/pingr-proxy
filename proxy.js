var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var pingrDev = 'https://pingr-dev.herokuapp.com';
var pingrBen = 'https://pingr-ben.herokuapp.com';

app.all("/app1/*", function(req, res) {
    console.log('redirecting to pingrDev');
    apiProxy.web(req, res, {target: pingrDev});
});

app.all("/app2/*", function(req, res) {
    console.log('redirecting to pingrBen');
    apiProxy.web(req, res, {target: pingrBen});
});

app.get('/', (req, res) => {
    res.send('ok');
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Listening on port ${process.env.PORT||3000}`);
});