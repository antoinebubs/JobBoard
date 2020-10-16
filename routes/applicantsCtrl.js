// Imports"
var db = require('../dbconnection');


//Routes
module.exports = {
    
    
    registerApplicant: function (req, res) {
        //implement
        var IDAdds = req.body.IDAdds;
        var IDpostulant = req.body.IDpostulants;
        var Msg = req.body.Msg;
        var Email = req.body.Email;
        var Nom = req.body.Nom;
        var Prénom = req.body.Prénom;
        var Formation = req.body.Formation;
        
        
        if (Email == null || MDP == null || Nom == null || Prénom == null || Formation == null || IDAdds == null || Msg == null || IDpostulant == null) {
            console.log(Email,MDP,Nom,Prénom,Formation,Msg,IDpostulant,IDAdds);
            return res.status(400).json({ error: 'missing parameter' });
            
        }
        
        db.query("SELECT * FROM postulants WHERE IDreq=?", [IDreq], function (err, result) {
            if (err) {
                
                return res.json("error");
                
            }
            else {
                if (result.length != 0) {
                    return res.status(500).json({ error: `l'utilisateur existe déja` });
                }
                
                db.query(`INSERT INTO postulants (IDAdds, IDpostulants, Msg, Nom, Prénom, Email, Formation) VALUES ('${IDAdds}', '${IDpostulant}',${Msg}','${Nom}','${Prénom}','${Email}','${Formation}')`, function (err, userCreate) {
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
    
    readApplicant : function(req,res) {
        //implement
        var IDreq = req.body.IDreq;
        
        
        db.query(`SELECT * FROM postulants WHERE ID=?`,[IDreq], function(err,result) {
            if (err) {
                return res.json(err);
            }
            else {
                return res.json(result);
            }
        });
        
        
    },
    
    updateApplicant: function (req, res) {
        // implement
        var IDreq = req.body.IDreq;
        var Email = req.body.Email;
        var MDP = req.body.MDP;
        var Nom = req.body.Nom;
        var Prénom = req.body.Prénom;
        var Formation = req.body.Formation;
        
        db.query(`UPDATE postulants SET Email = '${Email}', MDP = '${MDP}', Nom = '${Nom}', Prénom = '${Prénom}', Formation = '${Formation}' WHERE ID = ${IDreq}`, function ( err, result){
            if (err) {
                return res.json({error: err});
            }
            return res.json(result);
        }); 
        
    },
    
    removeApplicant: function (req, res) {
        //implement
        var ID = req.body.ID;
        
        db.query(`DELETE FROM postulants WHERE IDreq=?`,[IDreq], function (err, result){
            if (err) {
                
                return res.json({error: err});
            }
            return res.json(result);
        });
    },
}
