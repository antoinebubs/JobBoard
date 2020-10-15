// Imports"
var db = require('../dbconnection');


//Routes
module.exports = {

    register: function (req, res) {
        //implement
        var Email = req.body.Email;
        var MDP = req.body.MDP;
        var Nom = req.body.Nom;
        var Prénom = req.body.Prénom;
        var Formation = req.body.Formation;

        if (Email == null || MDP == null || Nom == null || Prénom == null || Formation == null) {
            console.log(Email,MDP,Nom,Prénom,Formation);
            return res.status(400).json({ error: 'missing parameter' });

        }

        db.query("SELECT * FROM demandeurs WHERE Email=?", [Email], function (err, result) {
            if (err) {
               
                return res.json("error");

            }
            else {
                if (result.length != 0) {
                    return res.status(500).json({ error: `l'utilisateur existe déja` });
                }

                db.query(`INSERT INTO demandeurs (Nom, Prénom, Email, MDP, Formation) VALUES ('${Nom}', '${Prénom}', '${Email}', '${MDP}', '${Formation}')`, function (err, userCreate) {
                    if (err) {
                        return res.json(err)
                    } else {
                        return res.json(userCreate);
                    }
                })
            }
        });
    },

    read : function(req,res) {
        //implement
        var ID = req.body.ID;
       

        db.query(`SELECT * FROM demandeurs WHERE ID=?`,[ID], function(err,result) {
            if (err) {
                return res.json(err);
            }
            else {
                return res.json(result);
            }
        });


    },

    login: function (req, res) {
        //implement
        var Email = req.body.Email;
        var MDP = req.body.MDP;

        db.query("SELECT * FROM demandeurs WHERE Email=?", [Email], function (err, result) {
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

    update: function (req, res) {
        // implement
        var ID = req.body.ID;
        var Email = req.body.Email;
        var MDP = req.body.MDP;
        var Nom = req.body.Nom;
        var Prénom = req.body.Prénom;
        var Formation = req.body.Formation;
        
        db.query(`UPDATE demandeurs SET Email = '${Email}', MDP = '${MDP}', Nom = '${Nom}', Prénom = '${Prénom}', Formation = '${Formation}' WHERE ID = ${ID}`, function ( err, result){
            if (err) {
            return res.json({error: err});
            }
            return res.json(result);
            }); 

        },
    
    remove: function (req, res) {
        //implement
        var ID = req.body.ID;
        
        db.query(`DELETE FROM demandeurs WHERE ID=?`,[ID], function (err, result){
            if (err) {

            return res.json({error: err});
            }
            return res.json(result);
            });
    },
}
