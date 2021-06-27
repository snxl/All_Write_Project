import express from'express';
import login from'../controller/login.js';
import multer from "../middlewares/multerMiddleware.js"
const router = express.Router();


/* GET home page. */
router.get('/', login.GET);
router.post("/", multer.any(), login.POST)
//router.put("/", login.POST)
//router.delete("/", login.DELETE)

export default router;
