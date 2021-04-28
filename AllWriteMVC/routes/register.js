import express from "express"

import pages from'../controller/pages.js';
import multerConfigs from "../middlewares/multerMiddleware.js"
import validator from "../middlewares/yup.js"

const router = express.Router();


/* GET home page. */
router.get('/', pages.registerGET);
router.post("/", multerConfigs.singlePublicUploads , validator ,pages.registerPOST)

export default router;
