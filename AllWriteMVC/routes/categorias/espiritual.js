import express from'express';
import espiritual from'../../controller/categorias/espiritual.js';
const router = express.Router();


/* GET home page. */
router.get('/', espiritual.GET);
//router.post("/", espiritual.POST)
//router.put("/", espiritual.PUT)
//router.delete("/", espiritual.DELETE)

export default router;
