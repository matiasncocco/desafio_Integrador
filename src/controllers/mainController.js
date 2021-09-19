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
                res.json({
                list: canciones,
                status: 200
            })
        })
        .catch(error => {
            res.status(500).json({
                status: 500,
                error
            });
        });
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
            res.json({
            list: cancion,
            status: 201
        })
        })
         .catch(error => {
            res.status(500).json({
                status: 500,
                error
            });
        });
            

    },

    detail: function(req,res){
         db.Cancion.findByPk(req.params.id)
                .then(cancion =>{
                    res.json({
                        data: cancion,
                        status: 200
                    })
                })
                .catch(error => {
                    res.status(500).json({
                        status: 500,
                        error
                    });
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
                }).then(() => res.status(200).json("Edition Successful"))
                    console.log(req.params.id)

                    // .catch(error => {
                    //     res.status(500).json({
                    //         status: 500,
                    //         error
                    //     });
                    // });
            },

     delete: function(req,res){
                db.Cancion.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                .then(cancion => {
                        res.json({
                        data: cancion,
                        status: 200
                    })
                })
                .catch(error => {
                    res.status(500).json({
                        status: 500,
                        error
                    });
                });
            },

   //Controlador para "/albumes"

    albumList: function(req, res){
        db.Album.findAll({
            attributes: ['nombre'],
            include: {
                model: db.Cancion,
                as: 'canciones',
                attributes: ['titulo']
            }
        })
        .then(albumes => {
            res.status(200).json({
                status: 200,
                albumes
            });
        }).catch(err => {
            res.status(500).json(err)
        });
    }

}

module.exports = controlador

