import service from "../service/updateProfile.js"

class Profile__config{
    GET(req, res){
        res.render("profile__config", {
            errorUser: false,

        })
    }

    POST(req, res){


      const body = req.body

      const {filename} = req.file || {}

      const token = req.cookies.token

      body.imageRoute = filename

      for(const updated in body){
        if(!body[updated] || body[updated] === "undefined") body[updated] = undefined
      }

      service.update(body, token)

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
