import express from "express"
import addBook from "../controller/add_book.js"

const router = express.Router()

router.get("/", addBook.get)

export default router
