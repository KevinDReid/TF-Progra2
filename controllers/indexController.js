const data = require("../db/data")
const db = require("../database/models");
const Post = db.Post;
const User = db.Usuario;
const Comm = db.Comentario
const bycript = require("bcryptjs");
const op = db.Sequelize.Op;

const controller = {
    index: function(req, res){

        Post.findAll({
            include: [
                {
                    association: 'usuario'
                },
                {
                    association: 'comentarios'
                }
            ]
        })
        .then((result) => {
            console.log(res.locals[0]);

            return res.render("index", {posts : result})
        });
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
    reg: (req, res) => {
        return res.render("registracion", {});
      },
    store: (req, res) => {
        let userInfo = req.body;
        // let imgPefil = req.file.filename;
        let user = {
          nombre: userInfo.firstName + ' ' + userInfo.lastName,
          email: userInfo.email,
          usuario: userInfo.username,
          contrasenia: bycript.hashSync(userInfo.password, 10),
          fecha_nacimiento: userInfo.date,
          numero_documento: userInfo.dni,
          foto: 'asd'
          // img: imgPefil,
        };
        User.create(user).then((result) => {
            return res.redirect("/login/");
          })
          .catch((err) => {
            return console.log(err);
          });
      },
    results: function(req,res) {
        return res.render('resultadoBusqueda',{})
    },
    newComment: (req, res) => {
        let info = req.body;
        console.log(req.user == undefined)

        let cum ={
            // id_post: asd,
            // id_usuario: res.locals,
            comentario: info.comment

        }
        Comm.create(cum).then((result)=> {
            return res.redirect('/')
        })

    }
    
}

module.exports = controller