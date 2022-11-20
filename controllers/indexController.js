const data = require("../db/data")
const db = require("../database/models");
const Post = db.Post;
const User = db.Usuario;
const Comm = db.Comentario
const bycript = require("bcryptjs");
const op = db.Sequelize.Op;

const controller = {
    index: function(req, res){
        // let commen = Comm.findAll().then((resul) => {return resul })
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
            console.log(result[1].comentarios[0]);

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
    loginPost:(req,res)=>{
        let info = req.body;
        let filtro={
            where:[{email:info.email}]
        }
        Usuario.findOne(filtro)
        .then((result)=>{
            if(result!=null){
                let passEncriptada= bycript.compareSync(info.password,result.password);
                if(passEncriptada){
                    req.session.user = result.dataValues;

                    if (info.rememberme != undefined) {
                        res.cookie('userId', result.dataValues.id, {maxAge: 1000 * 60 * 10})
                    }

                    return res.redirect('/');
                }else{
                    return res.send('Contraseña incorrecta');
                }
            }
        })
        .catch(error=>console.log(error))
       
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
          console.log('eee');
      },
    results: function(req,res) {
        return res.render('resultadoBusqueda',{})
    }
}

module.exports = controller