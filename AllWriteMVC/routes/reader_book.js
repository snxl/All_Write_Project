import express from'express';
import reader_book from'../controller/reader_book.js';
const router = express.Router();


/* GET home page. */
router.get('/', reader_book.GET);
//router.post("/", reader_book.POST)
//router.put("/", reader_book.PUT)
//router.delete("/", reader_book.DELETE)

export default router;
