class Index{
    GET(req, res){
        if(req.cookies.login == "true"){
            res.redirect("/dashboard")
        }else{
            res.status(200).render("index", {})
        }
    }
    
    POST(req, res){
        return
    }

    PUT(req, res){
        return
    }

    DELETE(req, res){
        return
    }
}


export default new Index
    