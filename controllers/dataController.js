const data = require("../db/data")

const controller = {
    index: function(req, res){
        return res.render('index', {
            users: data.users,
            posts: data.posts,
        })
    }
}

module.exports = controller