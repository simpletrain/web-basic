var FillInBlanks = require('./fill-in-blanks');
var SingleChoice = require('./single-choice');
var MultiChoice = require('./multi-choice');
var Judge = require('./judge');
var Subjective = require('./subjective');

function TopicFactory() {

}


TopicFactory.prototype.factory = function (topic) {
    var type = topic.type;

    if (type === 'fill_in_blanks') {
        return new FillInBlanks(topic.question, topic.options, topic.answer, topic.score, topic.input);
    } else if (type === 'single_choice') {
        return new SingleChoice(topic.question, topic.options, topic.answer, topic.score, topic.input);
    } else if (type === 'multi_choice') {
        return new MultiChoice(topic.question, topic.options, topic.answer, topic.score, topic.input);
    } else if (type === 'judge') {
        return new Judge(topic.question, topic.options, topic.answer, topic.score, topic.input);
    } else if (type === 'subjective') {
        return new Subjective(topic.question, topic.options, topic.answer, topic.score, topic.input);
    }
};


module.exports = TopicFactory;