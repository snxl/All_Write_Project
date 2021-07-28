import sequelize from "../database/models/index.js"

class Registro {
    async adiciona(register){

        const credential = 0

        const fullRegister = {...register, credential}

        const insert = await sequelize.Registro.create(fullRegister)

        return insert

    }

}

const register = new Registro

export default register
