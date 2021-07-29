import * as  yup  from  'yup'
import db from '../database/models/index.js'

import database from "../database/models/index.js"



class Validation{

    async register(req, res, next) {

        let email
        let user
        let erro1 = false
        let erro2 = false
        let erro3 = false
        let erro4 = false
        let erro5 = false
        let erro6 = false

        const schema = yup.object().shape({
            user: yup.string().required("inserir usuario"),
            name: yup.string().required("inserir nome"),
            email: yup.string().required("inesir e-mail"),
            password_hash: yup.string().required("Deve inserir a senha").matches(
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                "Deve conter 1 maiúculo 1 minúsculo e 8 digitos"
              ),
            checkPassword: yup.string().oneOf([yup.ref('password_hash'), null], 'senhas incorretas'),
        })


        const checkEmail = await database.Registro.findOne({
          where:{
            email : req.body.email
          }
        })

        const checkUser =  await database.Registro.findOne({
          where: {
            user : req.body.user
          }
        })

        if(!checkUser){
          user = false
        }else{
          user = "usuário existente"
        }

        if(!checkEmail){
          email = false
        }else{
          email = "email existente"
        }

        if(user && email){
          return res.render("registro",{
            erro1,
            erro2,
            erro3,
            erro4,
            erro5,
            erro6,
            email,
            user
        })
        }

        try {

            await schema.validate(req.body, {abortEarly: false})

            if(checkEmail === null && checkUser === null) return next()

            console.log(checkEmail, checkUser)

        } catch (results) {
            let allError = results.errors

            console.log()
            let checkPassword

            allError.find(element=> {
              if(element === "Deve inserir a senha") checkPassword = false
            })

            allError.forEach(element=>{
                if(element === "inserir usuario") return erro1 = element
                if(element === "inserir nome") return erro2 = element
                if(element === "inesir e-mail") return erro3 = element
                if(element === "Deve inserir a senha") return erro4 = element
                if(element === "senhas incorretas") return erro6 = element
                if(!(element === "Senha deve conter 1 maiúculo 1 minúsculo e 8 digitos")){
                  console.log(element)
                  return erro5 = element
                }else{
                    console.log(element)
                    return erro5 = false
                }
            })

            return res.render("registro",{
              erro1: erro1,
              erro2: erro2,
              erro3: erro3,
              erro4: erro4,
              erro5: erro5,
              erro6: erro6,
              email,
              user
            })
        }

    }

    async login(req, res, next){

      const schema = yup.shape.object({
        email: yup.string().required("inserir e-mail"),
        password: yup.string().required("inserir senha")
      })

      const checkEmail = await database.Registro.findOne({
        where:{
          email : req.body.email
        }
      })

      checkEmail != null ? email = "email existente": email = false;

      if(!checkEmail) return res.render("login", {
        erro1,
        erro2,
        erro3,
        erro4,
        erro5,
        erro6,
        email,
        user
      })

      try {
        await schema.validate(req.body, {abortEarly: false})

        if(checkEmail === null && checkUser === null) return next()
      } catch (error) {

        let allError = results.errors

        const checkPassword = allError.forEach(element=> {
            if(element === "Deve inserir a senha") return true
        })

        allError.forEach(element=>{
             if(element == "inserir usuario") erro1 = element
             if(element == "inserir nome") erro2 = element
            })

        return res.render("registro",{
          erro1,
          erro2,
          erro3,
          erro4,
          erro5,
          erro6,
          email,
          user
        })
      }

    }

    async put(req, res, next){

      const checkUser = await db.Registro.findOne({
        where:{
          user: req.body.user
        }
      })

      if(checkUser){

        return res.render("profile__config",{
          errorUser: true,
        })

      }else next()
    }

}

export default new Validation
