var FillInBlanks = require('./fill-in-blanks');
var SingleChoice = require('./single-choice');
var MultiChoice = require('./multi-choice');
var Judge = require('./judge');
var Subjective = require('./subjective');

function TopicFactory() {

}


TopicFactory.prototype.factory = function (data) {
    var type = data.type;

    if (type === 'fill_in_blanks') {
        topic = new FillInBlanks(data.question, data.answer, data.score, data.input);
        topic.setOptions(data.options);
    } else if (type === 'single_choice') {
        topic = new SingleChoice(data.question, data.answer, data.score, data.input);
        topic.setOptions(data.options);
    } else if (type === 'multi_choice') {
        topic = new MultiChoice(data.question, data.answer, data.score, data.input);
        topic.setOptions(data.options);
    } else if (type === 'judge') {
        topic = new Judge(data.question, data.answer, data.score, data.input);
        topic.setOptions(data.options);
    } else if (type === 'subjective') {
        topic = new Subjective(data.question, data.answer, data.score, data.input);
        topic.setOptions(data.options);
    }

    return topic;
};


module.exports = TopicFactory;