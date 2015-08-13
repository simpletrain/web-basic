var express = require('express');
var router = express.Router();
var HomeController = require('../../controller/home-controller');
var data = require('../../seed/data.json');


var homeController = new HomeController();

router.get('/',homeController.firstCall);

module.exports = router;
