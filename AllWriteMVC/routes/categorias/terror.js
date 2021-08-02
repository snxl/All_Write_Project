import express from'express';
import terror from'../../controller/categorias/terror.js';
const router = express.Router();


/* GET home page. */
router.get('/', terror.GET);
//router.post("/", terror.POST)
//router.put("/", terror.PUT)
//router.delete("/", terror.DELETE)

export default router;
