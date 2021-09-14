let db = require('../database/models');

const controlador = {

    index: (req,res) => {
        res.render('../views/home');
    },
    listado: (req,res) => {
        db.Album.findAll()
         .then(function(albumes){
             res.render('../views/home' , {peliculas:peliculas});
         })
    }
}

module.exports = controlador
