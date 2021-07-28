import db from "../database/models/index.js"
import jwt from "jsonwebtoken"
import {promisify} from "util"
import bcrypt from "bcryptjs"

export default new class updateProfile{

  async update(data, unique){

    try {

      const decodeToken = await promisify(jwt.verify)(unique, process.env.TOKEN_SECRET)

      const { id, name, user, email } = await db.Registro.update(data, {
        where:{
          id: decodeToken.id
        }
      })

    } catch (error) {

    }

  }

}
