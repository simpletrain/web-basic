var Topic = require('./topic');

function MultiChoice(question, options, answer, score, input) {
    Topic.call(this, 'multi_choice', question, options, answer, score, input);
}

MultiChoice.prototype = Object.create(Topic.prototype);
MultiChoice.prototype.constructor = MultiChoice;

MultiChoice.prototype.mark = function () {
    var score = 0;

    if (Array.isArray(this.input)) {
        var inputString = this.input.reduce(function (a, b) {
            return a + b;
        });

        if (inputString === this.answer) {
            score += this.score;
        }
    }

    return score;
};


module.exports = MultiChoice;