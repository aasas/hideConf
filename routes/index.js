var express = require('express');
var router = express.Router();
require("dotenv").config();

const MY_APP_SECRET = process.env.APP_SECRET;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("cest une donnee confidentielle "+MY_APP_SECRET);
});

module.exports = router;
