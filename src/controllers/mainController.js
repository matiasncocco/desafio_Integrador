let db = require('../database/models');

const controlador = {

    list: function(req, res){
        db.Cancion.findAll({
            attributes: 
            [
                'titulo'
            
            ]
        })
        .then(canciones => {
            return res.json(canciones)
        });
    },

    create: function(req, res){
         db.Cancion
          .create(req.body)
        .then(cancion => {
            console.log("Create works!");
            return res.json(cancion);
        });

    },
    detail: function(req,res){
        db.Cancion.findByPk(req.params.id,{
            attributes: 
            [
                'id',
                'titulo', 
                'duracion', 
                'genero_id', 
                'artista_id', 
                'album_id'
            ]
            })
                .then(cancion =>{
                    console.log("Detail works!");
                    return res.json(cancion);
                });
            },
}

module.exports = controlador


