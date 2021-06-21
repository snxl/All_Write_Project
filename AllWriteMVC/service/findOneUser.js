import database from "../database/models/index.js"

class findUsers{


  async findOneUser(email){
    return await database.Registro.findOne({
      where:{
        email
      },
      attributes:["id", "email", "user"]
    })
  }

}


export default new findUsers
