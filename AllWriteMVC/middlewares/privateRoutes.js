const validateRoute = {
    login:function(req, res, next){
        if(req.cookies.login == "logado"){
            console.log(req.cookies)
            next()
        }else{
            res.redirect("/register")
        }
    },
}

export default validateRoute

