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

var path = require('path'),
    fs = require('fs'),
    folders = fs.readdirSync('/home/ubuntu/medicians/');

// Leer carpeta medicians cada instance.json y crear el objeto router
var router = {
	'medicians.org': 'localhost:3000',
    'www.medicians.org': 'localhost:3000',

    'notifications.medicians.org' : 'localhost:7001'
};

// Leer carpeta solo primer nivel y añadir [carpeta]/instance.json
// router[instance.username + '.medicians.org'] = 'localhost:' + instance.port;

folders.forEach(function(folder) {
    var instance = JSON.parse(fs.readFileSync('/home/ubuntu/medicians/' + folder + '/instance.json'));

	router[instance.username + '.medicians.org'] = 'localhost:' + instance.port;    
});

httpProxy.createServer({
  router: router
}).listen(80); // Run with sudo