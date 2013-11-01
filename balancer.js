var httpProxy = require('http-proxy');

// Tabla que se actualice cada cierto tiempo y que cuando lo haga o reinicie este server o bien una función que redirija basado en la tabla.
/**
* ************************************
* Http Proxy Server with Proxy Table *
* ************************************
*
* 1001 => Notification Sever
* 1002 => Site
*
* 2XXX => Custom instances
*
*/
httpProxy.createServer({
  router: {
    'medicians.org': 'localhost:3000',
    'www.medicians.org': 'localhost:3000',

    //'notifications.medicians.org': 'localhost:1001',

    'demo.medicians.org': 'localhost:3010'
  }
}).listen(80); // Run with sudo