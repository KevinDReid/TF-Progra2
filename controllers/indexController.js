const data = require("../db/data")
const db = require("../database/models");
const Post = db.Post;
const User = db.Usuario;
const Comm = db.Comentario
const bycript = require("bcryptjs");
const op = db.Sequelize.Op;

const controller = {
    index: function(req, res){
        console.log(Post)
        Post.findAll()
        .then((result) => {
            console.log(result[2])

            return res.render("index", {posts : result})
        });
    },
    log:(req,res)=>{
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
        User.findOne(filtro)
        .then((result)=>{
            if(result!=null){
                let pass= bycript.compareSync(info.password,result.password);
                if(pass){
                    req.session.user = result.dataValues;
                    if (info.rememberme != undefined) {
                        res.cookie('userId', result.dataValues.id, {maxAge: 1000 * 60 * 10})
                    }
                    return res.redirect('/');
                }else{
                    return res.send('Password incorrecta');
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
        let errors = {};

        if (req.body.name == "") {
            errors.message = "Debe elegir un nombre de usuario";
            res.locals.errors = errors;
            return res.render('registerUser');

        }else if(req.body.email == ""){
            errors.message = "El campo email esta vacio";
            res.locals.errors = errors;
            return res.render('registerUser');
        } else {

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
      }},
    results: function(req,res) {
        return res.render('resultadoBusqueda',{})
    }
}

module.exports = controller