import * as  yup  from  'yup'

import database from "../database/models/index.js"

let email = false
let user = false
let erro1 = undefined
let erro2 = undefined
let erro3 = undefined
let erro4 = undefined
let erro5 = undefined
let erro6 = undefined

class Validation{

    async register(req, res, next) {

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

        const checkUser = await database.Registro.findOne({
          where: {
            user : req.body.user
          }
        })

        checkUser != null? user = "usuário existente" : user = false;
        checkEmail != null ? email = "email existente": email = false;


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

        } catch (results) {
            let allError = results.errors

            const checkPassword = allError.forEach(element=> {
                if(element === "Deve inserir a senha") return true
            })

            allError.forEach(element=>{
                if(element == "inserir usuario") erro1 = element
                if(element == "inserir nome") erro2 = element
                if(element == "inesir e-mail") erro3 = element
                if(element == "Deve inserir a senha") erro4 = element
                if(element == "Senha deve conter 1 maiúculo 1 minúsculo e 8 digitos" && checkPassword){
                    erro5 = false
                }else{
                    erro5 = element
                }
                if(element == "senhas incorretas") erro6 = element
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

}

export default new Validation
