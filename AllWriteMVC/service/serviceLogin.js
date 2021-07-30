import bcrypt from "bcryptjs"
import db from "../database/models/index.js"
import jwt from "jsonwebtoken"

export default new class Login{

  async searchUser(email){

    return await db.Registro.findOne({
      where:{email: email},
    })

  }

  async validateDatas(datas, password){

    if(await bcrypt.compare(password, datas.password)){

      const token = await jwt.sign({id: datas.id, user: datas.user, email: datas.email}, process.env.TOKEN_SECRET,{
        expiresIn: "7d"
      })

      return {
        status : "OK",
        webtoken: token
      }
    }else return {
      status: "ERR"
    }

  }

}
