import express from'express';
import category from'../../controller/categorias.js';
const router = express.Router();


/* GET home page. */
router.get('/:category/:page', category.GET);
//router.post("/", aventura.POST)
//router.put("/", aventura.PUT)
//router.delete("/", aventura.DELETE)

export default router;
