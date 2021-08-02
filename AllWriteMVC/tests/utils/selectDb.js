const db = require("../../database/models/index.js")


module.exports = async function selectDb(table){

  try {

    return await db[table].findAll()


  } catch (error) {

    return error

  }

}
