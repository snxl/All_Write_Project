class Profile__config{
    GET(req, res){
        res.render("profile__config", {
            title: "all write",

        })
    }

    POST(req, res){


      const { name, user, bio } = req.body

      const {file} = req
      return console.log({name, user, bio, file})
      return res.redirect("/profile")
    }


    PUT(req, res){
        res.render("profile__config", {
            title: "all write",

        })
    }

    DELETE(req, res){
        res.render("profile__config", {
            title: "all write",

        })
    }
}


export default new Profile__config
