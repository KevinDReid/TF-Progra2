module.exports = function (sequelize, dataTypes) {
    let alias = 'Comentario';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        id_usuario: {
            type: dataTypes.INTEGER
        },
        id_post: {
            type: dataTypes.INTEGER
        },
        comentario: {
            type: dataTypes.STRING
        },
    }

    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: false
    }

    let Comentario = sequelize.define(alias, cols, config);
    Comentario.associate = function (models) {
        Comentario.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "id_usuario"
        })
        Comentario.belongsTo(models.Post, {
            as: "post",
            foreignKey: "id_post"
        }) 
    }

    return Comentario;

}