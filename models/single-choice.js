var Topic = require('./topic');

function SingleChoice(question, options, answer, score, input) {
    Topic.call(this, 'single_choice', question, options, answer, score, input);
}

SingleChoice.prototype = Object.create(Topic.prototype);
SingleChoice.prototype.constructor = SingleChoice;

SingleChoice.prototype.mark = function () {
    return this.input === this.answer ? this.score : 0;
};


module.exports = SingleChoice;
