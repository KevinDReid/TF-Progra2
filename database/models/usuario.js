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
        createdAt: {
            type: dataTypes.DATE,
          },
          updateAt: {
            type: dataTypes.DATE,
          },
    }

    let config = {
        tableName: "usuarios",
        timestamps: false,
        underscored: true
    }

    let Usuario = sequelize.define(alias, cols, config);
    
    return Usuario;

}