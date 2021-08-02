import express from'express';
import ficcao from'../../controller/categorias/ficcao.js';
const router = express.Router();


/* GET home page. */
router.get('/', ficcao.GET);
//router.post("/", ficcao.POST)
//router.put("/", ficcao.PUT)
//router.delete("/", ficcao.DELETE)

export default router;
