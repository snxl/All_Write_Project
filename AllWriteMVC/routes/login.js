import express from'express';
import login from'../controller/login.js';
import multerConfigs from "../middlewares/multerMiddleware.js"
const router = express.Router();


/* GET home page. */
router.get('/', multerConfigs.any, login.GET);
router.post("/entry", multerConfigs.any, login.POST)
//router.put("/", login.POST)
//router.delete("/", login.DELETE)

export default router;
