class Reader_book{
    GET(req, res){
        res.render("reader_book", {
            title: "all write",
            imagePerfil: req.cookies.imagePerfil
        })
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


export default new Reader_book
