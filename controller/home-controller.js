var data = require('../seed/data.json');
var getInputs = require('../models/get-inputs');
var Score = require('../models/score');
var Helper = require('../models/helper');
var HomeViewModel = require('../view-model/home');

function HomeController() {

}

HomeController.prototype.index = function (req, res) {
    var helper = new Helper();
    var allTopic = helper.getTopic(data);

    var homeViewModel = new HomeViewModel(allTopic);


    res.render('index', homeViewModel);
};

HomeController.prototype.submit = function (req, res) {
    var helper = new Helper();
    var allTopic = helper.getTopic(data);

    allTopic = getInputs(req.body, allTopic);

    var score = new Score();
    score.markAll(allTopic);

    var homeViewModel = new HomeViewModel(allTopic,req.body,score.score);

    res.render('index', homeViewModel);
};


module.exports = HomeController;