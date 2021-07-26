import express from'express';
import misterio from'../../controller/categorias/misterio.js';
const router = express.Router();


/* GET home page. */
router.get('/', misterio.GET);
//router.post("/", misterio.POST)
//router.put("/", misterio.PUT)
//router.delete("/", misterio.DELETE)

export default router;
