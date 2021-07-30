import express from'express';
import literario from'../../controller/categorias/literario.js';
const router = express.Router();


/* GET home page. */
router.get('/', literario.GET);
//router.post("/", literario.POST)
//router.put("/", literario.PUT)
//router.delete("/", literario.DELETE)

export default router;
