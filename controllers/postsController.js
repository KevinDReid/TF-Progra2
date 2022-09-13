const data = require("../db/data");

const imgController = {
  img: function (req, res) {
    let id = req.params.id;
    let idBuscado = data.buscarId(id);
    let imgBuscado = data.searchImg(id);
    let searchDetail = data.searchImgDetail(id);
    if (searchDetail[0] != undefined) {
      return res.render("detallePost", {
        user: idBuscado,
        img: imgBuscado,
        detail: searchDetail,
        posts: data.posts,
      });
    } else {
      return res.send("No existe ese id");
    }
  },
};

module.exports = imgController;
