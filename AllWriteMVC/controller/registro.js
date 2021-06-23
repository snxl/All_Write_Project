import serviceRegister from "../service/serviceRegister.js"
import jwt from "jsonwebtoken"
import  crypt from "crypto"

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

        let token = await jwt.sign(
        {
          id: registerUser.id, user: registerUser.user, email: registerUser.email
        },
          process.env.TOKEN_SECRET,
        {
          expiresIn: process.env.TOKEN_EXPIRATION
        })


        res.cookie("ultimo acesso", new Date(), {
            maxAge: 604900000,
        })

        res.cookie("token", token, {
          maxAge: 604900000
        })

        const stringTeste = "uma string qualquer"

        // const stringCrypt = crypt.createSign("RSA-SHA256").write(stringTeste)

        res.cookie("teste", stringCrypt , {
          maxAge : 604900000,
          httpOnly: true,
          signed: true
        })

        return res.redirect("/profile")

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
