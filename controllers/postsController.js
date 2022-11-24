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
     //   res.send(post)
     res.render("detallePost", {
      post: post
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
        return res.render('updatePost',{post:result.dataValues})
    })
    .catch(erro=>console.log(erro))
    
},
updatePost:(req,res)=>{
    let filtro = {
        where:[{id:req.body.id}]
    }
    let info = req.body;

    post.update(info,filtro)
    .then((result)=>{
        return res.redirect('/users/myProfile')
    })
    .catch(()=>{
        return res.redirect('/')
    })
},
destroy:(req,res)=>{
let id = req.body.id;
let filtro = {
    where:[{
        id:id
    }]
}
post.destroy(filtro)
.then((result)=>{
    return res.redirect('/')
})
.catch((err)=>{
    console.log(err);
    return res.redirect('/')
})
}
};

module.exports = imgController;
