let db = require('../database/models');

const controlador = {

    listado: function(req, res){
        db.Cancion.findAll({
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
        .then(canciones => {
            console.log("Lista ok");
            return res.json({
                total: canciones.length,
                data: canciones,
                status: 200
            })
        });
    }

}

module.exports = controlador

