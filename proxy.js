//Options for proxywrap. This means the proxy will also respond to regular HTTP requests without PROXY information as well.
var proxy_opts = {strict: false}; 
var proxyWrap = require('findhit-proxywrap');
var opts = {
    port: process.env.PORT,
    serverModule = proxyWrap.proxy( require('http'), proxy_opts),
    // ssl: {
    //     //Do this if you want http2:
    //     //http2: true,        
    //     //serverModule = proxyWrap.proxy(require('spdy').server, proxy_opts),
    //     //Do this if you only want regular https
    //     serverModule = proxyWrap.proxy( require('http'), proxy_opts), 
    //     port: process.env.HTTPS_PORT,
    // }
}

// Create the proxy
var proxy = require('redbird')(opts);

//Run this proxy to route traffic accordingly

// could do something like this..
// proxy.register("http://localhost/bb","http://127.0.0.1:3334");
// proxy.register("http://localhost","http://127.0.0.1:3333");

//Production configuration
proxy.register("pingr-proxy.herokuapp.com","https://pingr-dev.herokuapp.com");
proxy.register("pingr-proxy.herokuapp.com/a","https://pingr-ben.herokuapp.com");
proxy.register("pingr-proxy.herokuapp.com/b","http://pingr-dev.herokuapp.com");
proxy.register("pingr-proxy.herokuapp.com/c","pingr-dev.herokuapp.com");
proxy.register("pingr-proxy.herokuapp.com/d","http://cdown.rw251.com");


