import express from'express';
import poesia from'../../controller/categorias/poesia.js';
const router = express.Router();


/* GET home page. */
router.get('/', poesia.GET);
//router.post("/", poesia.POST)
//router.put("/", poesia.PUT)
//router.delete("/", poesia.DELETE)

export default router;
