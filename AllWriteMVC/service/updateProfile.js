import db from "../database/models/index.js"
import bcrypt from "bcryptjs"

export default new class updateProfile{

  async oldPassword(id, passwordOld){

    const selectCheck = await db.Registro.findOne({
      where:{id},
    })

    const compareHash = await bcrypt.compare(passwordOld, selectCheck.password )

    if(compareHash) return true

    return false

  }

  async updateData(updateObj, id){

    return await db.Registro.update({
      ...updateObj
    },{
      where: {id}
    })

  }
}
