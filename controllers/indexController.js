const data = require("../db/data")

const controller = {
    index: function(req, res){
        return res.render('index', {
            users: data.users,
            posts: data.posts,
        })
    },
    log: function(req, res){
        return res.render('login', {})
    },
    logout:(req,res)=>{
        req.session.destroy();

        res.clearCookie('userId');

        res.locals.user = undefined;

        return res.render('login');
    },
    reg: function(req, res){
        return res.render('registracion', {
        })
    },
    results: function(req,res) {
        return res.render('resultadoBusqueda',{})
    }
}

module.exports = controller