import express from "express"

const route = express.Router()

route.get("/", (req, res)=>{
  res.render("teste", {
    name: "ariel"
  })
})

export default route
