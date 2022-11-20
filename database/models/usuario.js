module.exports = function (sequelize, dataTypes) {
    let alias = 'Usuario';

    let cols = {
        id_usuario: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuario: {
            type: dataTypes.STRING
        },
        nombre: {
            type: dataTypes.STRING
        },
        contrasenia: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        fecha_nacimiento: {
            type: dataTypes.DATE
        },
        numero_documento: {
            type: dataTypes.INTEGER
        },
        foto:{
            type: dataTypes.STRING
        },

    }

    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: true
    }

    let Usuario = sequelize.define(alias, cols, config);
    Usuario.associate = function (models) {
        Usuario.hasMany(models.Post, {
            as: "post",
            foreignKey: "id_usuario"
        }),
        Usuario.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "id_usuario"
        }) 
    }

    return Usuario;

}