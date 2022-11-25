const data = require("../db/data");
const db = require("../database/models");
const multer = require('multer');
const path = require('path');
const post = db.Post;


const imgController = {
  img: function (req, res) {

    db.Post.findOne({
      include: {
        all: true,
        nested: true
      },
      where: {
        id_post: req.params.id
      }
    })
    .then(post => {
      db.Usuario.findByPk(post.dataValues.id_usuario).then((resu)=>{
        
        res.render("detallePost", {
          post: post,
          posteador: resu
        })
      })
    })
  },
  add: function (req, res) {
    return res.render("agregarPost", {});
  },
  
  create: function (req, res) {
    let errors = {};

    if (req.file == undefined) {
        errors.message = "El campo foto esta vacio";
        res.locals.errors = errors;
        return res.render('agregarPost');

    }else if(req.body.descripcion == ""){
        errors.message = "El campo descripción esta vacio";
        res.locals.errors = errors;
        return res.render('agregarPost');
    } else {
        db.Post.create({
          id_usuario: req.session.user.id_usuario,
          descripcion: req.body.descripcion,
          name_img: req.file.filename,
          comments: req.file.Comentario
        })
        .then(()=>res.redirect("/"))
    }
    //return res.send(req.file)
  },
  update:(req,res)=>{
    let id = req.params.id;
    
    post.findByPk(id)
    .then((result)=>{
        if(result.id_usuario == req.session.user.id_usuario){
        return res.render('updatePost',{post:result.dataValues})}
        else {
          return res.redirect('/posts/detail/id/' + id)
        }
    })
    .catch(erro=>console.log(erro))
    
},
updatePost:(req,res)=>{
    let info = req.body;
    post.update(
      {
        name_img: req.file.filename,
        descripcion: req.body.descripcion
      },
      {
      where: {id_post : req.body.id_info}})
    .then((result)=>{

        return res.redirect('/posts/detail/id/' + req.body.id_info)
    })
    .catch(()=>{
        return res.redirect('/')
    })
},
destroy:(req,res)=>{
  let id = req.body.id;
  db.Post.findByPk(id).then((result)=>{

    if(result.id_usuario == req.session.user.id_usuario){
    db.Comentario.destroy({where:[{id_post: id}]}).then((resu)=>{
      
      post.destroy({where:[{
        id_post:id
      }]})
      .then((result)=>{
        console.log(result)
        
        return res.redirect('/')
      })
      .catch((err)=>{
        console.log(err);
        return res.redirect('/')
      })
    })}
    else {
      return res.redirect('/posts/detail/id/' + id)
    }
  })
  }
};

module.exports = imgController;
