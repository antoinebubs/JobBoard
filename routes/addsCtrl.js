// Imports"
var db = require('../dbconnection');


//Routes
module.exports = {

    registerAdds: function(req,res ) {
        //implement
        var Titre = req.body.Titre;
        var Description = req.body.Description;
        var Employeur= req.body.Employeur;

        if(Titre == null || Description == null) {
            
            return res.status(400).json({ error: 'missing parameters' });
            
        }
        db.query("SELECT * FROM jobAdds WHERE Titre=?",[Titre], function(err, result) {
            if (err) {
                
                return res.json({error:`y'a un soucis`})
            }
            db.query(`INSERT INTO jobadds (Titre, Description, Employeur) VALUES ('${Titre}', '${Description}', '${Employeur}')`, function (err, AddCreate) {
                if (err) {
                   
                    return res.json({error: `y'a un soucis`})
                } else {
                    
                    return res.json(AddCreate);
                }
            })
            
        });
    },


    loginAdds: function (req, res) {
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

    updateAdds: function (req, res) {
        // implement
        var ID = req.body.ID;
        var Email = req.body.Email;
        var MDP = req.body.MDP;
        var Titre = req.body.Titre;
        var Desccription = req.body.Description;

        
        db.query(`UPDATE jobAdds SET Titre = '${Email}', MDP = '${MDP}', Titre = '${Titre}',Description = '${Desccription}' WHERE ID = ${ID}`, function ( err, result){
            if (err) {

            return res.json({error: err});
            }
            return res.json(result);
            }); 

        },
    
    removeAdds: function (req, res) {
        //implement
        var ID = req.body.ID;
        
        db.query(`DELETE FROM jobAdds WHERE ID=?`,[ID], function (err, result){
            if (err) {

            return res.json({error: err});
            }
            return res.json(result);
            });
    },
}
