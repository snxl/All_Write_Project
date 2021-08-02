import jwt from "jsonwebtoken"

const validateRoute = {
    login:async function(req, res, next){

      const { token } = req.cookies

      if(token){
        next()
      }else{
        res.redirect("/")
      }
    }
}

export default validateRoute

