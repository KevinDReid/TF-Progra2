const data = require("../db/data");
const db = require("../database/models");
const multer = require('multer');
const path = require('path');

const imgController = {
  img: function (req, res) {
    db.Post.findOne({
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
          id_usuario: 1,
          descripcion: req.body.descripcion,
          name_img: req.file.filename,
          comments: req.file.Comentario
        })
        .then(()=>res.redirect("/"))
    }
    //return res.send(req.file)
  }
};

module.exports = imgController;
