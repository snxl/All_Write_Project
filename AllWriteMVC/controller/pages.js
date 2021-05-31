import Register from "../service/serviceRegister.js"

const pages = {
    dashboardGET: (req, res, next) => {
        if(req.cookies.login){
            return res.render('dashboard', {
                title: 'all write'
           })
        }else{
            res.redirect("/register")
        }
    },
    dashboardPOST: (req, res)=>{

    },
    indexGET: (req, res)=>{
        if(req.cookies.login == "true"){
            res.redirect("/dashboard")
        }else{
            res.status(200).render("index", {})
        }
    },
    indexPOST: () =>{

        return
    },
    registerGET: (req, res) =>{
            return res.render('register', {
                title:"all write"
            })
        
    },
    registerPOST:(req, res) => {

        const logado = req.session.logado

        const file = req.file

        const {
            usuario,
            name,
            email,
            senha,
            repetir_senha,
            estado,
            cidade
        } = req.body

        const checkPassword = senha === repetir_senha

        if(!file){
            res.status(400).send("oops... favor checar imagem inserida")
        }

        const myFile = file.path

        const dadosCadastro = {
            usuario,
            name,
            email,
            senha,
            estado,
            cidade
        }

        Register.adiciona(dadosCadastro, myFile)

        req.session.logado = true

        res.cookie("login", "true", {
            maxAge: 86400    
          })
        res.cookie("ultimo acesso", new Date())

        console.log(req.cookies)

        res.send({...dadosCadastro, ...file,  myFile})
    },
    profileGET: (req, res) => {
        return res.render("profile", {
            title: "all write"
        })
    },
    profilePOST: (req, res) =>{
        return 
    }
}

export default pages