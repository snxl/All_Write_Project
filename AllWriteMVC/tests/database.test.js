const insertDatas = require("./utils/insertDatas.js")
const  selectDb = require("./utils/selectDb.js")

const defaultInsertRegister = {
  user: "jestTest",
  name: "jest",
  email: "jest@teste.com",
  password_hash:"Jest1234",

}

describe("VALIDANDO TABELAS", ()=>{

  test("VALIDAR TABELA REGISTER", done =>{

    selectDb("Registro").then(e =>{

      expect(typeof(e) === "object").toBe(true)

      done()

    }).catch(err => done(err))

  })

  test("testando com async", done =>{

    selectDb("Livros").then(e => {

      expect(typeof(e) === "object").toBe(true)

      done()

    }).catch(e => done(e))

  })

})

describe("OPERAÇÕES REGISTER", ()=>{

  test("REGISTER INSERT", (done)=>{

    insertDatas("Registro", defaultInsertRegister).then(e => {

      expect(e.user).toBe("jestTest")
      expect(e.name).toBe("jest")
      expect(e.name).toBe("jest@teste.com")

      done()
    }).catch(err =>{
      console.log(err)

      done(err)
    })

  })

  test("REGISTER UPDATE", done =>{

q

  })

})
