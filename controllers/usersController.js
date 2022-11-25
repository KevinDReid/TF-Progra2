const users = require("../db/data");
const db = require('../database/models');
const user = db.Usuario
const usersController = {
  userDetail: function (req, res) {
    let id = req.params.id;
    db.Post.findAll({
      where:[{
      id_usuario: id
    }], 
    order: [
      ['created_at', 'DESC']
    ] })
    .then(post => {
      user.findByPk(id).then((us)=>{

        res.render("detalleUsuario", {
         post: post, user: us
        })
     //   res.send(post)
     })
    })
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
    
      return res.render("miPerfil", {user : result})
  })
  .catch((err) =>{
    console.log(err)
      return res.redirect("/users/myProfile")
  });
  },
  update:(req,res)=>{
    let id = req.session.user.id_usuario;
    user.findByPk(id)
    .then((result)=>{
        return res.render('editarPerfil',{user: result.dataValues})
    })
    .catch(erro=>console.log(erro))
    
},
updateProfile:(req,res)=>{
  
    let filtro = {
        where:[{id_usuario: req.session.user.id_usuario}]
    }
    let info = req.body;

    user.update({
      usuario: req.body.username,
      contrasenia: req.body.password,
      email: req.body.email,
      foto: req.file.filename
    },
    {
    where: {
      id_usuario: req.session.user.id_usuario
    }})
    .then((result)=>{
        return res.redirect('/users/myProfile')
    })
    .catch(()=>{
        return res.redirect('/')
    })
},
};


module.exports = usersController;
