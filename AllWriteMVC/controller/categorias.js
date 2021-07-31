import db from "../database/models/index.js"

class Aventura{
    async GET(req, res){

      try {

        const { category, page } = req.params

        let data = await db.Livros.findAll({
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

        data.forEach(element => {
          const date = String(element.createdAt)

          element.createdAt = date.split("GMT")[0].substr(4, 11).replace(/\s+/g, "/")

          console.log(element.createdAt)
        })

        return res.render("categoria", {
          category: category.toUpperCase(),
          data: data
        })

      } catch (error) {

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
