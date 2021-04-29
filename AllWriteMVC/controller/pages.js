import Register from "../service/serviceRegister.js"

const pages = {
    dashboardGET: (req, res, next) => {
        if(req.cookies.login == "true"){
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

        if(!file){
            res.status(400).send("oops... favor checar imagem inserida")
        }

        const myFile = file.filename

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
        req.session.imgPerfil = myFile

        const logado = req.session.logado
        const perfilImg = req.session.imgPerfil

        res.cookie("login", logado, {
            maxAge: 86400000    
          })

        res.cookie("ultimo acesso", new Date(), {
            maxAge: 86400000
        })

        res.cookie("imagePerfil", myFile)

        console.log(req.cookies)

        res.send({...dadosCadastro, ...file,  myFile})
    },
    profileGET: (req, res) => {
        res.render("profile", {
            title: "all write",
            imagePerfil: req.cookies.imagePerfil
        })

        console.log(req.cookies.perfilImg)
    },
    profilePOST: (req, res) =>{
        return 
    }
}

export default pages