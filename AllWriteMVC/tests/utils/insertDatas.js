const db = require("../../database/models")

module.exports = async function insertDataBase(table, toInsert){

  try {

    return await db[table].create(toInsert)

  } catch (error) {

    return error

  }

}
