import service from "../service/updateProfile.js"
import db from "../database/models/index.js"
import jwt from "jsonwebtoken"

class Profile__config{

    async GET(req, res){

        const token = jwt.verify(req.cookies.token, process.env.TOKEN_SECRET)

        const {route, bio, user} = await db.Registro.findOne({
          where:{
            id: token.id
          }
        })

        res.render("profile__config", {
            errorUser: false,
            profile: route,
            bio,
            user
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

    async DELETE(req, res){

      const token = jwt.verify(req.cookies.token, process.env.TOKEN_SECRET)

      const deleted = await db.Registro.destroy({
        where:{
          id:token.id
        }
      })


      res.cookie("token", token, {
        maxAge: 0,
        httpOnly: true
      })

      res.json(deleted)
    }
}


export default new Profile__config
