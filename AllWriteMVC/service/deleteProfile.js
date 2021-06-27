import db from "../database/models/index.js"

class destroyProfile {
  async destroy(id){

    console.log(id)

    return await db.Registro.destroy({
      where: {id}
    })

  }
}

export default new destroyProfile
