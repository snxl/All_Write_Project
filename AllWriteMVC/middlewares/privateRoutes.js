const validateRoute = {
    login:function(req, res, next){
        if(req.cookies.login == "true"){
            next()
        }else{
            res.redirect("/register")
        }
    },
    public:function(req, res, next){
        if(req.cookies.login == "true"){
            res.redirect("/dashboard")
        }
    }
}

export default validateRoute

