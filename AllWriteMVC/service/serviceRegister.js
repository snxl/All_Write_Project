import sequelize from "../database/models/index.js"

class Registro {
    async adiciona(register){

        const imageRoute = "undefined"

        const credential = 0

        const fullRegister = {...register, imageRoute, credential}

        const insert = await sequelize.Registro.create(fullRegister)

        return insert

    }
}

const register = new Registro

export default register
