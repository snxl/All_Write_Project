import express from'express';
import profile__config from'../controller/profile__config.js';
import multer from "../middlewares/multerMiddleware.js"

import validator from '../middlewares/yup.js';


const router = express.Router();


/* GET home page. */
router.get('/', profile__config.GET);
router.post("/", multer.single("file"), validator.put ,profile__config.POST)
router.put("/", profile__config.PUT)
router.delete("/", profile__config.DELETE)

export default router;
