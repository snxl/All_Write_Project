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

      console.log(email)

      const responseUser = await serviceLogin.searchUser(email)

      console.log(responseUser)

      if(!responseUser) return responseInvalidData()

      const validateDatas = await serviceLogin.validateDatas(responseUser, password)

      if(validateDatas.status !== "OK") return responseInvalidData()

      res.cookie("token", validateDatas.webtoken,{
        maxAge: 604900000,
        httpOnly: true
      })

      res.status(200).redirect("dashboard")

      function responseInvalidData(){
        res.render("login", {
          invalidData: true
        })
      }

    }
}


export default new Login
