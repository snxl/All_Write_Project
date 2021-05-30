import * as  yup  from  'yup'

class Validation{

    register(req, res, next) {
        const schema = yup.object().shape({
            user: yup.string().required("inserir usuario"),
            name: yup.string().required("inserir nome"),
            email: yup.string().required("inesir e-mail"),
            password: yup.string().required("Deve inserir a senha").matches(
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                "Deve conter 1 maiúculo 1 minúsculo e 8 digitos"
              ),
            checkPassword: yup.string().oneOf([yup.ref('password'), null], 'senhas incorretas'),
        })
    
        schema.validate(req.body, {abortEarly: false}).then(results =>{
            Promise.resolve(
                next()
            )
        }).catch(results =>{
            let allError = results.errors
    
            let erro1 = undefined
            let erro2 = undefined
            let erro3 = undefined
            let erro4 = undefined
            let erro5 = undefined
            let erro6 = undefined
    
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
    
            Promise.reject(
    
                res.render("registro",{
                    erro1,
                    erro2,
                    erro3,
                    erro4,
                    erro5,
                    erro6,
                    emailIsValid:true,
                    passwordIsValid:true
                })
            )
        })
    }

}

export default new Validation