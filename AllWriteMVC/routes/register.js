import express from "express"

import register from'../controller/register.js';
import multerConfigs from "../middlewares/multerMiddleware.js"
import validator from "../middlewares/yup.js"

const router = express.Router();


/* GET home page. */
router.get('/', register.GET);
router.post("/", multerConfigs.singlePublicUploads , validator , register.POST)
//router.put('/', register.PUT);
//router.delete('/', register.DELETE);

export default router;
