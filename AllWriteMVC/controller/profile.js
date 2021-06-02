class Profile{
    GET(req, res){
        return res.render('profile', {
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