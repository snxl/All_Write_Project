import express from "express"
import books from "../controller/library.js"

const router = express.Router()

router.get("/all-books", books.allBooks)

export default router
