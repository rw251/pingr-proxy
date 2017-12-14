var proxy = require('redbird')({
  port: 80,
});

//Run this proxy to route traffic accordingly

// could do something like this..
// proxy.register("http://localhost/bb","http://127.0.0.1:3334");
// proxy.register("http://localhost","http://127.0.0.1:3333");

//Production configuration
proxy.register("https://pingr-proxy.herokuapp.com","https://pingr-dev.herokuapp.com");
proxy.register("https://pingr-proxy.herokuapp.com/beta","https://pingr-ben.herokuapp.com");

