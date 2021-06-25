import database from "../database/models/index.js"

class Login{
    GET(req, res){
        res.status(200).render("login")
    }

    POST(req, res){
        const { email, password } = req.body

        res.json({ url:"" , email, password})
    }

    PUT(req, res){
        return
    }

    DELETE(req, res){
        return
    }
}


export default new Login
