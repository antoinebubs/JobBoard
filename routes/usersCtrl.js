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
            return res.status(400).json({ error: 'missing parameters' });

        }

        db.query("SELECT * FROM demandeurs WHERE Email=?", [Email], function (err, result) {
            if (err) {
                return res.json('err')

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
        
        db.query(`UPDATE demandeurs SET Email = ${Email}, MDP = ${MDP}, Nom = ${Nom}, Prénom = ${Prénom}, Formation = ${Formation} WHERE ID = ${ID}`, function ( err, result){
            if (err) {

            return res.json({error:`Error`});
            }
            return res.json(result);
            }); 

        },
    
    remove: function (req, res) {
        //implement
        var ID = req.body.ID;
        
        db.query(`REMOVE * FROM demandeurs WHERE ID=?`,[ID], function (err, result){
            if (err) {

            return res.json({error: 'Error'});
            }
            return res.json(result);
            });
    },
}

   /* addjobs: function(req,res ) {
        //implement
        var Titre = req.body.Titre;
        var Description = req.body.Description;
        var Employeur= req.body.Employeur;

        if(Titre == null || Description == null) {
            console.log('1');
            return res.status(400).json({ error: 'missing parameters' });
            
        }
        db.query("SELECT * FROM jobAdds WHERE Titre=?",[Titre], function(err, result) {
            if (err) {
                console.log('2');
                return res.json({error:`y'a un soucis`})
            }
            db.query(`INSERT INTO jobadds (Titre, Description, Employeur) VALUES ('${Titre}', '${Description}', '${Employeur}')`, function (err, AddCreate) {
                if (err) {
                    console.log(err);
                    return res.json({error: `y'a un soucis`})
                } else {
                    console.log('4');
                    return res.json(AddCreate);
                }
            })
            
        });

    }*/

