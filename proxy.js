var proxy = require('redbird')({
  port: process.env.PORT,
});

//Run this proxy to route traffic accordingly

// could do something like this..
// proxy.register("http://localhost/bb","http://127.0.0.1:3334");
// proxy.register("http://localhost","http://127.0.0.1:3333");

//Production configuration
proxy.register("pingr-proxy.herokuapp.com","https://pingr-dev.herokuapp.com");
proxy.register("pingr-proxy.herokuapp.com/beta","https://pingr-ben.herokuapp.com");

