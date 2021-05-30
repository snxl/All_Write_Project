class Login{
    GET(req, res){
        res.status(200).render("login")
    }
    
    POST(req, res){
        return res.send(req.body)
    }

    PUT(req, res){
        return
    }

    DELETE(req, res){
        return
    }
}


export default new Login
    