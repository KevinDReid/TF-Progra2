module.exports = function (sequelize, dataTypes) {
    let alias = 'Usuario';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        usuario: {
            type: dataTypes.STRING
        },
        contrasenia: {
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
        underscored: false
    }

    let Usuario = sequelize.define(alias, cols, config);
    
    return Usuario;

}