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
            ],
            order: [['created_at', 'DESC']]
        })
        .then((result) => {

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
        let filtro = {
          where: [{email: info.email }],
        };
        User.findOne(filtro)
          .then((result) => {
            if (result != null) {

              let passEncriptada = bycript.compareSync(
                info.password,
                result.contrasenia
                );
                console.log(passEncriptada)
              
                if (passEncriptada) {
                  req.session.user = result.dataValues;

    
                if (info.remember != undefined) {
                  res.cookie("userId", result.dataValues.id_usuario, {
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
      
        let errors = {};

        if (req.file == undefined) {
          errors.message = "Tiene que ingresar una foto";
          res.locals.errors = errors;
          return res.render('registracion');
      
        }
        
        else if (req.body.firstName == "") {
            errors.message = "Tiene que ingresar su nombre";
            res.locals.errors = errors;
            return res.render('registracion');

        }
        
        else if (req.body.username == "") {
              errors.message = "Tiene que ingresar un usuario";
              res.locals.errors = errors;
              return res.render('registracion');
        
        }
         
        else if(req.body.password == ""){
          errors.message = "Debe ingresar una contraseña";
          res.locals.errors = errors;
          return res.render('registracion');
        } 

        else if(req.body.password.length < 3){
            errors.message = "La contraseña debe tener más de 3 caracteres";
            res.locals.errors = errors;
            return res.render('registracion');

        }
       

        else if (req.body.email == "") {
          errors.message = "Tiene que ingresar su email";
          res.locals.errors = errors;
          return res.render('registracion');
    
        }

        else if (req.body.date == "") {
          errors.message = "Tiene que ingresar su fecha de nacimiento";
          res.locals.errors = errors;
          return res.render('registracion');
    
        }

        else if (req.body.dni == "") {
          errors.message = "Tiene que ingresar su numero de documento";
          res.locals.errors = errors;
          return res.render('registracion');
    
        }

        else if (req.body.dni.length != 8) {
          errors.message = "Tiene que tener 8 numeros";
          res.locals.errors = errors;
          return res.render('registracion');
    
        }
        
        else {

            let userInfo = req.body;
            let user = {
              nombre: userInfo.firstName + ' ' + userInfo.lastName,
              email: userInfo.email,
              usuario: userInfo.username,
              contrasenia: bycript.hashSync(userInfo.password, 10),
              fecha_nacimiento: userInfo.date,
              numero_documento: userInfo.dni,
              foto: req.file.filename
            };
            User.create(user).then((result) => {
                return res.redirect("/login/");
              })
            .catch((err) => {
              return console.log(err);
            });
        }
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