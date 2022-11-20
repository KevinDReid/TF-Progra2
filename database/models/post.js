module.exports = function (sequelize, dataTypes) {
    let alias = 'Post';

    let cols = {
        id_post: {
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
        likes_number: {
            type: dataTypes.INTEGER
        },

    }

    let config = {
        tableName: "posteos",
        timestamps: true,
        underscored: true
    }

    let Post = sequelize.define(alias, cols, config);
    Post.associate = function (models) {
        Post.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "id_usuario"
        })
        Post.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "id_post"
        }) 

    }

    return Post;

}