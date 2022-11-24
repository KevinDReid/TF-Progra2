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
    let id = req.session.user.id_usuario;
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
    
    console.log(result)
      return res.render("miPerfil", {user : result})
  })
  .catch((err) =>{
    console.log(err)
      return res.redirect("/users/myProfile")
  });
  },
  update:(req,res)=>{
    let id = req.params.id;
    user.findByPk(id)
    .then((result)=>{
        return res.render('editarPerfil',{user: result.dataValues})
    })
    .catch(erro=>console.log(erro))
    
},
updatePost:(req,res)=>{
    let filtro = {
        where:[{id_usuario: req.body.id}]
    }
    let info = req.body;

    user.update(info,filtro)
    .then((result)=>{
        return res.redirect('/users/myProfile')
    })
    .catch(()=>{
        return res.redirect('/')
    })
},
};


module.exports = usersController;
