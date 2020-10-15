// Imports"
var db = require('../dbconnection');


//Routes
module.exports = {


    registerApplicant: function (req, res) {
        //implement
        var IDAdds = req.body.IDAdds;
        var IDpostulant = req.body.IDpostulants;
        var Msg = req.body.Msg;
       

        if (IDAdds == null || IDpostulant == null || Msg == null) {
            
            return res.status(400).json({ error: 'missing parameter' });

        }

        db.query("SELECT * FROM postulants WHERE IDAdds=?", [IDAdds], function (err, result) {
            if (err) {
               
                return res.json("error");

            }
            else {
                if (result.length != 0) {
                    return res.status(500).json({ error: `l'utilisateur existe déja` });
                }

                db.query(`INSERT INTO postulants (Nom, Prénom, Email, MDP, Formation) VALUES ('${Nom}', '${Prénom}', '${Email}', '${MDP}', '${Formation}')`, function (err, userCreate) {
                    if (err) {
                        return res.json(err)
                    } 
                    else {
                        return res.json(userCreate);
                    }
                })
            }
        });
    },

   /* readApplicant : function(req,res) {
        //implement
        var ID = req.body.ID;
       

        db.query(`SELECT * FROM postulants WHERE ID=?`,[ID], function(err,result) {
            if (err) {
                return res.json(err);
            }
            else {
                return res.json(result);
            }
        });


    },

    loginApplicant: function (req, res) {
        //implement
        var Email = req.body.Email;
        var MDP = req.body.MDP;

        db.query("SELECT * FROM postulants WHERE Email=?", [Email], function (err, result) {
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

    updateApplicant: function (req, res) {
        // implement
        var ID = req.body.ID;
        var Email = req.body.Email;
        var MDP = req.body.MDP;
        var Nom = req.body.Nom;
        var Prénom = req.body.Prénom;
        var Formation = req.body.Formation;
        
        db.query(`UPDATE postulants SET Email = '${Email}', MDP = '${MDP}', Nom = '${Nom}', Prénom = '${Prénom}', Formation = '${Formation}' WHERE ID = ${ID}`, function ( err, result){
            if (err) {
            return res.json({error: err});
            }
            return res.json(result);
            }); 

        },
    
    removeApplicant: function (req, res) {
        //implement
        var ID = req.body.ID;
        
        db.query(`DELETE FROM postulants WHERE ID=?`,[ID], function (err, result){
            if (err) {

            return res.json({error: err});
            }
            return res.json(result);
            });
        },
     }
    */
    


}