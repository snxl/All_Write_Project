class Profile{
    GET(req, res){
        return res.render('dashboard', {
            title: 'all write'
       })
    }

    POST(req, res){

    }

    PUT(req, res){
        return
    }

    DELETE(req, res){
        return
    }
}

export default new Profile