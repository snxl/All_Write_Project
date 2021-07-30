import express from'express';
import contact_support from'../controller/contact_support.js';
import controller from '../service/sendMailService.js';

const router = express.Router();


/* GET home page. */
router.get('/', contact_support.GET);
router.post("/", controller)
//router.put("/", contact_support.PUT)
//router.delete("/", contact_support.DELETE)

export default router;



