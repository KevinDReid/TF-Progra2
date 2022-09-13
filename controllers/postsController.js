const data = require("../db/data")

const imgController = {
    img: function(req, res){
        let id = req.params.id;
        let idBuscado = data.buscarId(id)
        let imgBuscado = data.searchImg(id)
        let searchDetail = data.searchImgDetail(id)
        if (idBuscado != 0) {
            return res.render('detallePost', {
                user : idBuscado,
                img : imgBuscado,
                detail : searchDetail
            })
        } else {
            return res.send('No existe ese id') 
        }
    },
    }


module.exports = imgController