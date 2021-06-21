import jwt from "jsonwebtoken"

const validateRoute = {
    login:async function(req, res, next){

      const tokenJWT = req.cookies.token

      if(!tokenJWT){
        res.status(401).redirect("/")
      }else{
        const dataToken = await jwt.verify(tokenJWT, process.env.TOKEN_SECRET)

        const { id, email, user } = dataToken

        console.log(`\n\n\n ${id}, \n${email}, \n${user} \n\n\n`)

        next()
      }
    },
}

export default validateRoute

