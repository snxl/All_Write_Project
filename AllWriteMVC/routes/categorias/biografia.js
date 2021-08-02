import express from'express';
import biografia from'../../controller/categorias/biografia.js';
const router = express.Router();


/* GET home page. */
router.get('/', biografia.GET);
//router.post("/", biografia.POST)
//router.put("/", biografia.PUT)
//router.delete("/", biografia.DELETE)

export default router;
