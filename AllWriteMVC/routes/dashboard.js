import express from'express';
import pages from'../controller/pages.js';
const router = express.Router();


/* GET home page. */
router.get('/', pages.dashboardGET);
router.post("/", pages.dashboardPOST)

export default router;
