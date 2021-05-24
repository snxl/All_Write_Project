import express from'express';
import dashboard from'../controller/dashboard.js';
const router = express.Router();


/* GET home page. */
router.get('/', dashboard.GET);
//router.post("/", dashboard.POST)
//router.put("/", dashboard.PUT)
//router.delete("/", dashboard.DELETE)

export default router;
