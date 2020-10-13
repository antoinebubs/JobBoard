// Imports"
var db = require('../dbconnection');


//Routes
module.exports = {

    registerCompany: function (req, res) {
        //implement
        var Email = req.body.Email;
        var MDP = req.body.MDP;
        var Employeur = req.body.Employeur;
        var Description = rq.body.Description;
        

        if (Email == null || MDP == null || Employeur == null || Description == null) {
            return res.status(400).json({ error: 'missing parameters' });

        }

        db.query("SELECT * FROM employeurs WHERE Email=?", [Email], function (err, result) {
            if (err) {
               
                return res.json("error");

            }
            else {
                if (result.length != 0) {
                    return res.status(500).json({ error: `l'utilisateur existe déja` });
                }

                db.query(`INSERT INTO employeurs (Employeur, Email, MDP, Description) VALUES ('${Employeur}', '${Description}', '${Email}', '${MDP}')`, function (err, userCreate) {
                    if (err) {
                        return res.json(err)
                    } else {
                        return res.json(userCreate);
                    }
                })
            }
        });
    },


    loginCompany: function (req, res) {
        //implement
        var Email = req.body.Email;
        var MDP = req.body.MDP;

        db.query("SELECT * FROM employeurs WHERE Email=?", [Email], function (err, result) {
            if (err) {
               
                return res.json({error:`mot de passe ou email incorrect`});

            }
            else {
                
                if(result[0].MDP == MDP){
                    return res.json(result);
                }
                else {
                return res.json({error:'mot de passe ou email incorrect'});
                }
            }
        });
    },

    updateCompany: function (req, res) {
        // implement
        var ID = req.body.ID;
        var Email = req.body.Email;
        var MDP = req.body.MDP;
        var Employeur = req.body.Employeur;
        var Description = rq.body.Description;
        
        db.query(`UPDATE employeurs SET Email = '${Email}', MDP = '${MDP}',Description = '${Description}',Employeur= '${Employeur}' WHERE ID = ${ID}`, function ( err, result){
            if (err) {

            return res.json({error: err});
            }
            return res.json(result);
            }); 

        },
    
    removeCompany: function (req, res) {
        //implement
        var ID = req.body.ID;
        
        db.query(`DELETE FROM employeurs WHERE ID=?`,[ID], function (err, result){
            if (err) {

            return res.json({error: err});
            }
            return res.json(result);
            });
    },
}