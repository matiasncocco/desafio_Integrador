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
        // let aux = req.body;
        db.Cancion.create({
            titulo: req.body.titulo,
            duracion: req.body.duracion,
            genero_id: req.body.genero_id,
            artista_id: req.body.artista_id,
            album_id: req.body.album_id
        })

          .then(cancion => {
            console.log("Create works!");
             res.json(cancion);
        }).catch(error =>{
            res.json(error);
        })
            

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
    
    edit: function(req,res){
          db.Cancion.update({
                titulo: req.body.titulo,
                duracion: req.body.duracion,
                album_id: req.body.album_id,
                genero_id: req.body.genero_id,
                artista_id: req.body.artista_id
                },
                {
                where: {
                    id: req.params.id
                       }
                }
                );
                console.log(req.params.id)
            },

     delete: function(req,res){
                db.Cancion.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                .then(cancion => {
                    return res.json(cancion);
                })
            },

   //Controlador para "/albumes"

    albumList: function(req, res){
        db.Album.findAll({
            attributes: 
            [
             'nombre'
            ],
            include:[
            'canciones'
            ]
        
        })
        .then(albumes => {
            console.log(albumes.canciones);

            // let nombreCanciones = canciones.map(darSoloElTitulo(canciones) => 
            //     return canciones.titulo: 
            //     )

            res.json(albumes)
        })
        .catch(error =>{
            res.json(error);
        })
    }

}

module.exports = controlador