import jwt from "jsonwebtoken"
import { promisify } from "util"
import db from "../database/models/index.js"

export default new class bookController{

  async store(req, res){

    const {file, background} = req.files

    const {tittle, sinopse, category} = req.body

    const { token } = req.cookies

    try {

      const { id } = await promisify(jwt.verify)(token, process.env.TOKEN_SECRET)

      const newBook = await db.Livros.create({ id_user: id, titulo: tittle, category: category.toLowerCase() ,sinopse, pdf: file[0].filename, image: background[0].filename })

      res.json(newBook)

    } catch (error) {

      res.json(error)

    }


  }

  async user(req, res){

    try {

      const { id } = await promisify(jwt.verify)(req.cookies.token, process.env.TOKEN_SECRET)

      const userRegister = await db.Registro.findOne({
        where:{
          id
        },
        include:{
          model: db.Livros,
          as: "my_books",
          required:false
        }
      })

      return res.json(userRegister)

    } catch (error) {

      res.json(error)

    }
  }


  async allUser(req, res){

    try{

      const allUsers = await db.Registro.findAll({
        include:{
          model: db.Livros,
          as: "my_books",
          required:false
        }
      })

      return res.json(allUsers)

    }catch(err){

      res.json(err)

    }
  }

  async allBooks(req, res){

    try {

      const {limit} = req.query
      const {page} = req.query
      const {category} = req.query || {}

      if(req.query.limit && req.query.page){
        req.query.limit * req.query.page - req.query.limit
      }

      if(category){
        const selectCategory = await db.Livros.findAll({
          where:{
            category
          },
          include:{
            model:db.Registro,
            as:"autor"
          },
          limit: Number(limit),
          offset: Number(page),
        })

        return res.json(selectCategory)
      }

      const data = await db.Livros.findAll({
        include:{
          model:db.Registro,
          as:"autor"
        },
        limit: Number(limit),
        offset: Number(page)
      })

      return res.json(data)

    } catch (error) {

    }
  }
}
