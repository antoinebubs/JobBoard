//Imports
var express = require('express');
var usersCtrl = require('./routes/usersCtrl');
//Router
exports.router = (function(){
    var Rooter = express.Router();

    //Users routes

    Rooter.route('/users/register').post(usersCtrl.register);
    Rooter.route('/users/login').post(usersCtrl.login);
    Rooter.route('/users/update').post(usersCtrl.update);
    Rooter.route('/users/remove').post(usersCtrl.remove);

    return Rooter;
})();