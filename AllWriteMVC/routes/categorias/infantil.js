import express from'express';
import infantil from'../../controller/categorias/infantil.js';
const router = express.Router();


/* GET home page. */
router.get('/', infantil.GET);
//router.post("/", infantil.POST)
//router.put("/", infantil.PUT)
//router.delete("/", infantil.DELETE)

export default router;
