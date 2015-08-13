var FillInBlanks = require('./fill-in-blanks');
var SingleChoice = require('./single-choice');
var MultiChoice = require('./multi-choice');
var Judge = require('./judge');
var Subjective = require('./subjective');

function TopicFactory() {

}


TopicFactory.prototype.factory = function (oneTopic) {
    var type = oneTopic.type;

    if (type === 'fill_in_blanks') {
        return new FillInBlanks(oneTopic.question, oneTopic.options, oneTopic.answer, oneTopic.score, oneTopic.input);
    } else if (type === 'single_choice') {
        return new SingleChoice(oneTopic.question, oneTopic.options, oneTopic.answer, oneTopic.score, oneTopic.input);
    } else if (type === 'multi_choice') {
        return new MultiChoice(oneTopic.question, oneTopic.options, oneTopic.answer, oneTopic.score, oneTopic.input);
    } else if (type === 'judge') {
        return new Judge(oneTopic.question, oneTopic.options, oneTopic.answer, oneTopic.score, oneTopic.input);
    } else if (type === 'subjective') {
        return new Subjective(oneTopic.question, oneTopic.options, oneTopic.answer, oneTopic.score, oneTopic.input);
    }
};


module.exports = TopicFactory;