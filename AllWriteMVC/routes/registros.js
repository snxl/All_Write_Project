import express from "express"

import Validation from "../middlewares/yup.js"

import registro from "../controller/registro.js"

import multer from "../middlewares/multerMiddleware.js"

const router = express.Router()

router.get("/", registro.GET)
router.post("/", multer.any(), Validation.register , registro.POST)

export default router
