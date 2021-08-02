import jwt from "jsonwebtoken"
import destroyProfile from "../service/deleteProfile.js"
import profileUpdate from "../service/updateProfile.js"
import db from "../database/models/index.js"


class Profile{

    async GET(req, res){

      try {

        const token = jwt.verify(req.cookies.token, process.env.TOKEN_SECRET)

        const {user, bio, route, imageRoute, name, email, my_books} = await db.Registro.findOne({
          where:{
            id: token.id
          },
          include:{
            model: db.Livros,
            as:"my_books"
          }
        })

        return res.render('profile', {
            userName: user,
            description: bio,
            route: route,
            books: my_books
       })

      } catch (error) {

      }
    }

    async PUT(req, res){

      const { token } = req.cookies

      const file = req.file

      const dataJwt = await jwt.verify(token, process.env.TOKEN_SECRET)

      const {
        name,
        password_hash,
        old_password
      } = req.body

      const checkPassword = await profileUpdate.oldPassword(dataJwt.id, old_password)


      res.status(200).json({
        name,
        password_hash,
        old_password,
        checkPassword,
        file
      })

    }

    async DELETE(req, res){
      const tokenJwt = req.cookies.token;

      const dataJwt =  await jwt.verify(tokenJwt, process.env.TOKEN_SECRET)

      await destroyProfile.destroy(dataJwt.id)

      res.cookie("token", null,{

        maxAge: 0

      })

      return res.redirect("/")
    }

    async EXIT(){

      res.cookie("token", null, { maxAge: 0})

      return res.redirect("/")

    }
}

export default new Profile
