import express from'express';
import suspense from'../../controller/categorias/suspense.js';
const router = express.Router();


/* GET home page. */
router.get('/', suspense.GET);
//router.post("/", suspense.POST)
//router.put("/", suspense.PUT)
//router.delete("/", suspense.DELETE)

export default router;
