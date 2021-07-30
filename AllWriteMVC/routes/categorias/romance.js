import express from'express';
import romance from'../../controller/categorias/romance.js';
const router = express.Router();


/* GET home page. */
router.get('/', romance.GET);
//router.post("/", romance.POST)
//router.put("/", romance.PUT)
//router.delete("/", romance.DELETE)

export default router;
