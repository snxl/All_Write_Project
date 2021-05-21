import express from "express"

import sequelizerTest from "../controller/testeSequelize.js"

const Router = express.Router()


Router.get("/", sequelizerTest.findAll)


export default Router