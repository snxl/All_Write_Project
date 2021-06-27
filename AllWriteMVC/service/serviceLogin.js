import bcrypt from "bcryptjs"
import db from "../database/models/index.js"

export default new class Login{

  async searchUser(email){
    return await db.Registro.findOne({
      where:{email},
      attributes:["email", "id", "password"]
    })
  }

  validateData(){

  }

}
