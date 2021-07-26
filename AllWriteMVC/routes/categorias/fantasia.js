import express from'express';
import fantasia from'../../controller/categorias/fantasia.js';
const router = express.Router();


/* GET home page. */
router.get('/', fantasia.GET);
//router.post("/", fantasia.POST)
//router.put("/", fantasia.PUT)
//router.delete("/", fantasia.DELETE)

export default router;
