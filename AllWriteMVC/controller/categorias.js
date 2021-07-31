import db from "../database/models/index.js"

class Aventura{
    async GET(req, res){

      try {

        const { category, page } = req.params

        const data = await db.Livros.findAll({
          where:{
            category
          },
          include:{
            model:db.Registro,
            as:"autor"
          },
          limit: 16 ,
          offset: 0,
        })

        return res.render("categoria", {
          category: category.toUpperCase(),
          data: data,
          user: "teste"

        })

      } catch (error) {
        console.log(error)
      }

    }

    POST(req, res){
        return
    }

    PUT(req, res){
        return
    }

    DELETE(req, res){
        return
    }
}


export default new Aventura
