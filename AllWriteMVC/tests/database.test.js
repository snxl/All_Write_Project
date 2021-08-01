// const selectDb = require("./selectDb.js")

import selectDb from "./selectDb.js"


describe("TESTANDO TABELAS", ()=>{

  test("VALIDAR TABELA REGISTER", async ()=>{
    const data = await selectDb("Registro")

    expect(data).toBe("object")

  })

})
