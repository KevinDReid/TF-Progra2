const data = require("../db/data");
const db = require("../database/models")

const imgController = {
  img: function (req, res) {
    let id = req.params.id;
    let idBuscado = data.buscarId(id);
    let imgBuscado = data.searchImg(id);
    let searchDetail = data.searchImgDetail(id);
    let matchCom = data.match(id);
    if (searchDetail[0] != undefined) {
      return res.render("detallePost", {
        user: idBuscado,
        img: imgBuscado,
        detail: searchDetail,
        posts: data.posts,
        match: matchCom,
      });
    } else {
      return res.send("No existe ese id");
    }
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
          name_img: req.file.filename
        })
        .then(()=>res.redirect("/"))
    }
    //return res.send(req.file)
  }
};

module.exports = imgController;
