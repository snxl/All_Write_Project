import express from'express';
import pages from'../controller/pages.js';
const router = express.Router();


/* GET home page. */
router.get('/', pages.registerGET);
router.post("/", pages.registerPOST)

export default router;
