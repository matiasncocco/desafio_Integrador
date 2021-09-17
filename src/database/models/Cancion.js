module.exports = function(sequelize, dataTypes) {
    
    let alias = "Cancion";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true        
        },
        titulo: {
            type: dataTypes.STRING
        },
        duracion: {
            type: dataTypes.INTEGER
        },
        generoId: {
            type: dataTypes.INTEGER,
            field: 'genero_id'
        },
        artistaId:{
            type: dataTypes.INTEGER,
            field: 'artista_id'
        },
        albumId:{
            type: dataTypes.INTEGER,
            field: 'album_id'
        }

    }

    let config = {
        tableName: "canciones",
        timestamps: false
    }
    
    
    let Cancion = sequelize.define(alias, cols, config);

    Cancion.associate = function(models) {
        Cancion.belongsTo(models.Artista,{
            as:"artista",
            foreingKey:"artista_id"
        });
        Cancion.belongsTo(models.Genero,{
            as:"genero",
            foreingKey:"genero_id"
        });
        Cancion.belongsTo(models.Album,{
            as:"album",
            foreingKey:"album_id"
        });
    }

    return Cancion
}