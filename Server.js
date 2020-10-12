 //rooter
var express = require('express');
var bodyParser = require('body-parser');
var Rooter = require('./Rooter').router;
var cors = require('cors')
 
//instance serveur
var server = express();


//body Parser config()
server.use(
	cors(),
	bodyParser.urlencoded({extended: true}),
	bodyParser.json()
)

server.use(bodyParser.urlencoded({extended: true }));
server.use(bodyParser.json());



server.use('/api/',Rooter);

//lancement du serveur
server.listen(8000,function(){
	console.log('serveur ok')
});





