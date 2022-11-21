const users = require("../db/data");
const db = require('../database/models');
const user = db.Usuario
const usersController = {
  userDetail: function (req, res) {
    let id = req.params.id;
    db.Post.findAll({
      include: {
        all: true,
        nested: true
      },
      where: {
        id: req.params.id
      }
    })
    .then(post => {
     //   res.send(post)
     res.render("detalleUsuario", {
      post: post
     })
    })
  },
  editProfile: function (req, res) {
    let id = req.params.id;
    let idBuscado = users.buscarId(id);
    let imgBuscado = users.searchImg(id);
    return res.render("editarPerfil", {
      user: idBuscado,
      img: imgBuscado,
    });
  },
  myProfile: function (req, res) {
    let id = 1;
    let relaciones = {
      include : [
          {
              all : true,
              nested: true
          },
          {association:'comentarios'},
          {association:'post'}

      ]
  };
  user.findByPk(id,relaciones)         
  .then((result) => {
    
    console.log(result.post)
      return res.render("miPerfil", {user : result})
  })
  .catch((err) =>{
      return res.redirect("/")
  });
  },
};
module.exports = usersController;
