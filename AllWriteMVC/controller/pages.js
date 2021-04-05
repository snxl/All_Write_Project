import Register from "../service/serviceRegister.js"

const pages = {
    indexGET: (req, res, next) => {
        return res.render('index', {
             title: 'all write'
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
        const dadosCadastro = req.body

        //Register.adiciona(dadosCadastro)

        res.json(req.body)
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