var express = require('express');
const pages = require('../controller/pages');
var router = express.Router();


/* GET home page. */
router.get('/', pages.profileGET);

module.exports = router;
