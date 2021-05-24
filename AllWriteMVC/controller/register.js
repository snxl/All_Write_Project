import register from "../service/serviceRegister.js"

class Index{
    GET(req, res){
        return res.render('register', {
            title:"all write"
        })
    }

    async POST(req, res){

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
            return res.status(400).send("oops... favor checar imagem inserida")
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
    }

    PUT(req, res){
        return
    }

    DELETE(req, res){
        return
    }
}


export default new Index
    