import db from "../database/models/index.js"
import jwt from "jsonwebtoken"

class Reader_book{
    async GET(req, res){

      try {

        const token = jwt.verify(req.cookies.token, process.env.TOKEN_SECRET)

        const {id} = req.params

        const {route, user} = await db.Registro.findOne({
          where:{
            id: token.id
          }
        })

        const data = await db.Livros.findOne({
          where:{
            id
          },
          include:{
            model: db.Registro,
            as:"autor"
          }
        })

        console.log(data)

        res.render("reader_book", {
            errorUser: false,
            profile: route,
            user,
            data
        })

      } catch (error) {

      }
    }

    POST(req, res){
        return
    }

    PUT(req, res){
        return
    }

    DELETE(req, res){
        return
    }
}


export default new Reader_book
