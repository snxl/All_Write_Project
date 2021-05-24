import express from'express';
import index from'../controller/index.js';
const router = express.Router();


/* GET home page. */
router.get('/', index.GET);
//router.post("/", index.POST)
//router.put("/", index.POST)
//router.delete("/", index.DELETE)

export default router;
