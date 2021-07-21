import express from'express';
import success from'../controller/success.js';


const router = express.Router();


/* GET home page. */
router.get('/', success.GET);
//router.post("/", success.POST)
//router.put("/", success.PUT)
//router.delete("/", success.DELETE)

export default router;