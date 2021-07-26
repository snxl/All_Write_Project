class Profile__config{
    GET(req, res){
        res.render("profile__config", {
            title: "all write",

        })
    }

    POST(req, res){


      const { name, user, bio, imageRoute } = req.body
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
