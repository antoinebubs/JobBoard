// Imports"
var db = require('../dbconnection');


//Routes
module.exports = {

    registerAdds: function(req,res ) {
        //implement
        var Titre = req.body.Titre;
        var Description = req.body.Description;
        var EmployeurID= req.body.EmployeurID;

        if(Titre == null || Description == null) {
            
            return res.status(400).json({ error: 'missing parameters' });
            
        }
        db.query("SELECT * FROM jobAdds WHERE Titre=?",[Titre], function(err, result) {
            if (err) {
                
                return res.json({error:`y'a un soucis`})
            }
            db.query(`INSERT INTO jobadds (Titre, Description, EmployeurID) VALUES ('${Titre}', '${Description}', '${EmployeurID}')`, function (err, AddCreate) {
                if (err) {
                   
                    return res.json({error: `y'a un soucis`})
                } else {
                    
                    return res.json(AddCreate);
                }
            })
            
        });
    },

    readallAdds : function(req,res){
        
        db.query(`SELECT * FROM jobAdds`, function(err,result) {
            if(err){
                return res.json(err);
            }
            else

            return res.json(result);
        });
    },

    readAdds : function(req,res) {
        //implement
        var ID = req.body.ID;
       

        db.query(`SELECT * FROM jobAdds WHERE ID=?`,[ID], function(err,result) {
            if (err) {
                return res.json(err);
            }
            else {
                return res.json(result);
            }
        });


    },


    updateAdds: function (req, res) {
        // implement
        var ID = req.body.ID;
        var Titre = req.body.Titre;
        var Desccription = req.body.Description;

        
        db.query(`UPDATE jobAdds SET Titre = '${Titre}',Description = '${Desccription}' WHERE ID = ${ID}`, function ( err, result){
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
