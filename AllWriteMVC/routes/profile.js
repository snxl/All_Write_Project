import express from'express';
import profile from'../controller/profile.js';
const router = express.Router();


/* GET home page. */
router.get('/', profile.GET);
//router.post('/', profile.POST);
//router.put('/', profile.PUT);
//router.delete('/', profile.DELETE);

export default router;
