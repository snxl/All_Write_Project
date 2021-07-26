import express from'express';
import aventura from'../../controller/categorias/aventura.js';
const router = express.Router();


/* GET home page. */
router.get('/', aventura.GET);
//router.post("/", aventura.POST)
//router.put("/", aventura.PUT)
//router.delete("/", aventura.DELETE)

export default router;
