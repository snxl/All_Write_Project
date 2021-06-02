class Dashboard{
    GET(req, res){
        res.render("dashboard", {
            title: "all write",
            imagePerfil: req.cookies.imagePerfil
        })
        console.log(req.cookies.perfilImg)
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


export default new Dashboard
    