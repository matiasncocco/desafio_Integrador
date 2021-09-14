module.exports = (sequelize, DataTypes) => {
    let alias = 'Cancion';
    let columns = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        titulo: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        duracion: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    };
    let config = {
        underscored: true,
        tableName: 'canciones',
        timestamps: true,
        paranoid: true,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8mb4_unicode:ci'
        }
    };
    let Cancion = sequelize.define(
        alias,
        columns,
        config
    );

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
    
    return Cancion;
};