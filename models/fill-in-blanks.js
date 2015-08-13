var Topic = require('./topic');
var _ = require('lodash');

function FillInBlanks(question, options, answer, score, input) {
    Topic.call(this, 'fill_in_blanks', question, options, answer, score, input);
}

FillInBlanks.prototype = Object.create(Topic.prototype);
FillInBlanks.prototype.constructor = FillInBlanks;

FillInBlanks.prototype.mark = function () {
    var score = 0;

    if (!Array.isArray(this.input)) {
        if (this.answer.indexOf(this.input) !== -1) {
            score += this.score;
        }
    } else {
        score += _.intersection(this.input, this.answer).length * this.score;
    }

    return score;
};


module.exports = FillInBlanks;