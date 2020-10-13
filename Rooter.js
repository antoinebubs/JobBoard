//Imports
var express = require('express');
var usersCtrl = require('./routes/usersCtrl');
var addsCtrl = require('./routes/addsCtrl');
var companyCtrl= require('./routes/companyCtrl');
//Router
exports.router = (function(){
    var Rooter = express.Router();

    //Users routes

    Rooter.route('/users/register').post(usersCtrl.register);
    Rooter.route('/users/login').post(usersCtrl.login);
    Rooter.route('/users/update').post(usersCtrl.update);
    Rooter.route('/users/remove').post(usersCtrl.remove);

    //Adds routes

    Rooter.route('/adds/registerAdds').post(addsCtrl.registerAdds);
    Rooter.route('/adds/loginAdds').post(addsCtrl.loginAdds);
    Rooter.route('/users/updateAdds').post(addsCtrl.updateAdds);
    Rooter.route('/users/removeAdds').post(addsCtrl.removeAdds);

    //Companies routes

    Rooter.route('/adds/registerCompany').post(companyCtrl.registerCompany);
    Rooter.route('/adds/loginCompany').post(companyCtrl.loginCompany);
    Rooter.route('/users/updateCompany').post(companyCtrl.updateCompany);
    Rooter.route('/users/removeCompany').post(companyCtrl.removeCompany);

    



    return Rooter;

})();