import database from "../database/models/index.js"
import serviceLogin from "../service/serviceLogin.js"

class Login{
    GET(req, res){
        res.status(200).render("login", {
          invalidData: false
        })
    }

    async POST(req, res){

      const { email, password } = req.body

      const responseUser = await serviceLogin.searchUser(email)

      if(responseUser == null){
        //return responseInvalidData()
      }

      console.log(email, responseUser)

      res.json(responseUser)

      function responseInvalidData(){
        res.render("login", {
          invalidData: true
        })
      }

    }
}


export default new Login
