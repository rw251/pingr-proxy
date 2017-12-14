var proxy = require('redbird')({
  port: process.env.PORT,
  xfwd: false,
});

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


