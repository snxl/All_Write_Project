
import sequelize from "../database/models/index.js"

const teste = {
    findAll:async (req, res)=>{

        const datas = await sequelize.Registro.findAll()
        
        res.json(datas)
    }
}


export default teste