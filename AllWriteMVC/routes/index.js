import express from'express';
import pages from'../controller/pages.js';
const router = express.Router();


/* GET home page. */
router.get('/', pages.indexGET);
router.post("/", pages.indexPOST)

export default router;
