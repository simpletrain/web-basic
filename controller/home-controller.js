var data = require('../seed/data.json');
var getInputs = require('../models/get-inputs');
var Score = require('../models/score');
var Helper = require('../models/view-helper');

function HomeController() {

}

HomeController.prototype.index = function (req, res) {
    var title = data.title;

    var helper = new Helper();
    var allTopic = helper.getTopic(data);

    res.render('index', {
        title: title,
        class_name: '',
        id_number: '',
        student_name: '',
        allTopic: allTopic,
        score: ''
    });
};

HomeController.prototype.submit = function (req, res) {
    var title = data.title;

    var helper = new Helper();
    var allTopic = helper.getTopic(data);

    var originInput = req.body;
    allTopic = getInputs(originInput, allTopic);

    var score = new Score();
    score.markAll(allTopic);

    res.render('index', {
        title: title,
        class_name: originInput.class_name,
        id_number: originInput.id_number,
        student_name: originInput.student_name,
        allTopic: allTopic,
        score: score.score
    });
};


module.exports = HomeController;