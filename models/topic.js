var Option = require('./option');

function Topic(type, question, answer, score, input) {
    this.type = type;
    this.question = question;
    this.options = [];
    this.answer = answer;
    this.score = score;
    this.input = input;
}

Topic.prototype.mark = function () {
    //Should be implemented
};

Topic.prototype.setOptions = function (options) {
    var _this = this;
    options.forEach(function(option) {
        _this.options.push(new Option(option.value,option.description));
    });
};

module.exports = Topic;