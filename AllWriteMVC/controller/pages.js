import register from "../service/serviceRegister.js"

const pages = {
    dashboardGET: (req, res, next) => {
            return res.render('dashboard', {
                title: 'all write'
           })
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
    registerPOST:async (req, res) => {

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

        const insert = await register.adiciona(dadosCadastro, myFile)

        req.session.logado = true

        const logado = req.session.logado
        const perfilImg = req.session.imgPerfil

        //COOKIES

        res.cookie("login", logado, {
            maxAge: 86400000   
          })

        res.cookie("ultimo acesso", new Date(), {
            maxAge: 86400000
        })

        res.cookie("imagePerfil", myFile)

        if(insert !== false){
            return res.send({...dadosCadastro, ...file,  myFile, insert})
        }else{
            return res.send(`<h1> Usuario ou e-mail já existente </h1>`)
        }
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