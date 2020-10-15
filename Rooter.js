//Imports
var express = require('express');
var usersCtrl = require('./routes/usersCtrl');
var addsCtrl = require('./routes/addsCtrl');
var companyCtrl= require('./routes/companyCtrl');
const applicantsCtrl = require('./routes/applicantsCtrl');
//Router
exports.router = (function() {
    var Rooter = express.Router();

    //Users routes

    Rooter.route('/registerUsers').post(usersCtrl.register);
    Rooter.route('/readUsers').post(usersCtrl.read);
    Rooter.route('/loginUsers').post(usersCtrl.login);
    Rooter.route('/updateUsers').post(usersCtrl.update);
    Rooter.route('/removeUsers').post(usersCtrl.remove);

    //Adds routes

    Rooter.route('/registerAdds').post(addsCtrl.registerAdds);
    Rooter.route('/readAdds').post(addsCtrl.readAdds);
    Rooter.route('/updateAdds').post(addsCtrl.updateAdds);
    Rooter.route('/removeAdds').post(addsCtrl.removeAdds);

    //Companies routes

    Rooter.route('/registerCompany').post(companyCtrl.registerCompany);
    Rooter.route('/readCompany').post(companyCtrl.readCompany);
    Rooter.route('/loginCompany').post(companyCtrl.loginCompany);
    Rooter.route('/updateCompany').post(companyCtrl.updateCompany);
    Rooter.route('/removeCompany').post(companyCtrl.removeCompany);

    //Applicants routes

    Rooter.route('/registerApplicant').post(applicantsCtrl.registerApplicant);

    return Rooter;

})();