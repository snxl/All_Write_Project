import database from "../database/models/index.js"

class findUsers{


  async findOneUser(email){
    const find = await database.Registro.findOne({
      where:{
        email
      },
      attributes:["id", "email"]
    })

    return find
  }


}


export default new findUsers
