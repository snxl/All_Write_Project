import Register from "../service/serviceRegister.js"

const pages = {
    dashboardGET: (req, res, next) => {
        return res.render('dashboard', {
             title: 'all write'
        })
    },
    dashboardPOST: (req, res)=>{

    },
    indexGET: (req, res)=>{
        res.status(200).render("index", {
        
        })
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

        const checkPassword = senha === repetir_senha

        if(!file || !usuario || !email || !checkPassword || !estado || !cidade || !name){
            res.status(400).send("oops... Parece que vc enviou algum arquivo errado")
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
+

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