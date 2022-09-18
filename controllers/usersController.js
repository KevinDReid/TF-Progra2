const users = require("../db/data");
const usersController = {
  userDetail: function (req, res) {
    let id = req.params.id;
    let idBuscado = users.buscarId(id);
    let imgBuscado = users.searchImg(id);
    if (idBuscado[0] != undefined) {
      return res.render("detalleUsuario", {
        user: idBuscado,
        img: imgBuscado,
      });
    } else {
      return res.send("No existe ese id");
    }
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
    let id = 2;
    let idBuscado = users.buscarId(id);
    let imgBuscado = users.searchImg(id);
    let searchImgDetail = users.searchImgDetail();
    return res.render("miPerfil", {
      user: idBuscado,
      img: imgBuscado,
      imgBuscado: searchImgDetail,
    });
  },
};
module.exports = usersController;
