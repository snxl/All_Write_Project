import express from "express"

import Validation from "../middlewares/yup.js"

import registro from "../controller/registro.js"

const router = express.Router()

router.get("/", registro.GET)
router.post("/", Validation.register , registro.POST)

export default router