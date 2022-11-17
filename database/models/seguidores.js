module.exports = function (sequelize, dataTypes) {
    let alias = 'Seguidor';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        id_seguido: {
            type: dataTypes.INTEGER
        },
        id_seguidores: {
            type: dataTypes.INTEGER
        },
    
    }

    let config = {
        tableName: "seguidores",
        timestamps: true,
        underscored: false
    }

    let Seguidor = sequelize.define(alias, cols, config);
    
    return Seguidor;

}