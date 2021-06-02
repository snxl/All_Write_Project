import serviceRegister from "../service/serviceRegister.js"

class Registro{
    GET(req, res){
        return res.render('registro', {
            title: 'all write',
            erro1: false,
            erro2: false,
            erro3: false,
            erro4: false,
            erro5: false,
            erro6: false
       })
    }

    async POST(req, res){
        
        const {
            user,
            name,
            email,
            password,
        } = req.body

        const register = await serviceRegister.adiciona({
            user,
            name,
            email,
            password
        })

        if(register){

            res.cookie("login", "logado", {
                maxAge: 86400000   
            })
    
            res.cookie("ultimo acesso", new Date(), {
                maxAge: 86400000
            })

            return res.redirect("/profile")
        }else{
            res.render("registro",{
                erro1: false,
                erro2: false,
                erro3: false,
                erro4: false,
                erro5: false,
                erro6: false,
                emailIsValid:true,
                passwordIsValid:true
            })
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