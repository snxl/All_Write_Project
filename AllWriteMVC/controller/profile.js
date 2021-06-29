import jwt from "jsonwebtoken"
import destroyProfile from "../service/deleteProfile.js"
import profileUpdate from "../service/updateProfile.js"


class Profile{
    GET(req, res){
        return res.render('profile', {
            title: 'all write'
       })
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
