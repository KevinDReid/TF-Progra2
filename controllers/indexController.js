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
        if (req.session.user != undefined) {
            return res.redirect('/')
        } else {
            return res.render('login')
        }
    },
    loginPost: (req, res) => {
        let info = req.body;
        console.log('EAFSFSASF');
        let filtro = {
          where: [{email: info.email }],
        };
        User.findOne(filtro)
          .then((result) => {
            if (result != null) {
              let passEncriptada = async function () {
               return await bycript.compareSync(
                info.password,
                result.password
                );
              }
                if (passEncriptada) {
                  req.session.user = result.dataValues;
                  console.log(result.dataValues);
    
                if (info.rememberme != undefined) {
                  res.cookie("userId", result.dataValues.id, {
                    maxAge: 1000 * 60 * 10,
                  });
                }
    
                return res.redirect("/");
              } else {
                return res.send("La clave no coincide");
              }
            }
          })
          .catch((error) => console.log(error));
      },
    logout:(req,res)=>{
        req.session.destroy();

        res.clearCookie('userId');

        res.locals.user = undefined;

        return res.render('login', {});
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
        // let info = req.body;
        // console.log(req.body)

        // let cum ={
        //     id_post: info.id_post,
        //     // id_usuario: res.locals,
        //     comentario: info.comment,

        // }
        // Comm.create(cum).then((result)=> {
            return res.redirect('/')
        // })

    }
    
}

module.exports = controller