import express from'express';
import profile from'../controller/profile.js';
import multer from "../middlewares/multerMiddleware.js"


const router = express.Router();


/* GET home page. */
router.get('/', profile.GET);
router.put("/update", multer.single("file"), profile.PUT)
router.delete("/delete", multer.any(), profile.DELETE)
router.get("/exit", multer.any(), profile.DELETE)

export default router;
