const users = require('../db/data')
const usersController = {
    userDetail: function(req, res) {
        let id = req.params.id;
        let idBuscado = users.buscarId(id)
        let imgBuscado = users.searchImg(id)
        if (idBuscado != 0) {
            return res.render('detalleUsuario', {
                user : idBuscado,
                img : imgBuscado
            })
        } else {
            return res.send('No existe ese id') 
        }
    },
}
module.exports = usersController