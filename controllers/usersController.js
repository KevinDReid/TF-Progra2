const users = require('../db/data.js')
const usersController = {
    userDetail: function(req, res) {
        let id = req.params.id;
        let idBuscado = users.buscarId(id)
        if (idBuscado != 0) {
            return res.render('detalleUsuario', {
                userId : idBuscado,
            })
        } else {
            return res.send('No existe ese id') 
        }
    },
}
module.exports = usersController