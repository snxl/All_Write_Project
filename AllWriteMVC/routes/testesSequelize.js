import express from "express"
import teste from "../controller/testesSequelize.js"

const router = express.Router()

router.get("/", teste.findAll)


export default router