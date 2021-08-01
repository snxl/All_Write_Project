import db from "../database/models/index.js"


export default async function selectDb(table){

  try {

    return await db[table].findAll()


  } catch (error) {

    return error

  }

}
