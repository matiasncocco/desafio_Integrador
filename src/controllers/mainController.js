let db = require('../database/models');
const Cancion = require('../database/models/Cancion');

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
        })
        .catch(error =>{
            res.json(error);
        })
    },

    create: function(req, res){
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
         db.Cancion.findByPk(req.params.id)
                .then(cancion =>{
                    console.log("Detail works!");
                    return res.json(cancion);
                })
                .catch(error =>{
                    res.json(error);
                })
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
                }).then(() => res.status(200).json("Holu"))
                  
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
             'nombre',
            ],
            include:
            [
             'canciones'
            ]
        
        })
        
        .then(albumes => {
            res.json(albumes)
        })
        .catch(error =>{
            res.json(error);
        })
    }

}

module.exports = controlador

