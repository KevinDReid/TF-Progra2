module.exports = function (sequelize, dataTypes) {
    let alias = 'Post';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        id_usuario: {
            type: dataTypes.INTEGER
        },
        descripcion: {
            type: dataTypes.STRING
        },
        name_img: {
            type: dataTypes.STRING
        },
    }

    let config = {
        tableName: "posteos",
        timestamps: true,
        underscored: false
    }

    let Post = sequelize.define(alias, cols, config);
    
    return Post;

}