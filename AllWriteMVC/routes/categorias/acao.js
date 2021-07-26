import express from'express';
import acao from'../../controller/categorias/acao.js';
const router = express.Router();


/* GET home page. */
router.get('/', acao.GET);
//router.post("/", acao.POST)
//router.put("/", acao.PUT)
//router.delete("/", acao.DELETE)

export default router;
