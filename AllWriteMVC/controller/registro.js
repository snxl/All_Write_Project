import serviceRegister from "../service/serviceRegister.js"
import findUsers from "../service/findOneUser.js"
import jwt from "jsonwebtoken"

class Registro{
    GET(req, res){
        return res.render('registro', {
            title: 'all write',
            erro1: false,
            erro2: false,
            erro3: false,
            erro4: false,
            erro5: false,
            erro6: false,
            user: false,
            email: false
       })
    }

    async POST(req, res){

        const {
            user,
            name,
            email,
            password_hash,
        } = req.body

        const registerUser = await serviceRegister.adiciona({
          user,
          name,
          email,
          password_hash
         })

        if(registerUser){

        res.cookie("login", "logado", {
          maxAge: 86400000
        })

        res.cookie("ultimo acesso", new Date(), {
            maxAge: 86400000
        })

        const dataUser = await findUsers.findOneUser(email)


        let token = await jwt.sign({id: dataUser.id, email: dataUser.email}, process.env.TOKEN_SECRET, {
          expiresIn: process.env.TOKEN_EXPIRATION
        })


        res.json(token)
        // return res.redirect("/profile")

        }
    }

    PUT(req, res){
        return
    }

    DELETE(req, res){
        return
    }
}

export default new Registro
