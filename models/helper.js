var TopicFactory = require('./factory.js');

function Helper() {

}

Helper.prototype.getTopic = function (data) {
    var allTopic = {
        fill_in_blanks: [],
        single_choice: [],
        multi_choice: [],
        judge: [],
        subjective: []
    };

    var topicFactory = new TopicFactory;

    for (var i = 0; i < data.paper.length; i++) {
        if (data.paper[i].type === 'fill_in_blanks') {
            allTopic.fill_in_blanks.push(topicFactory.factory(data.paper[i]));
        } else if (data.paper[i].type === 'single_choice') {
            allTopic.single_choice.push(topicFactory.factory(data.paper[i]));
        } else if (data.paper[i].type === 'multi_choice') {
            allTopic.multi_choice.push(topicFactory.factory(data.paper[i]));
        } else if (data.paper[i].type === 'judge') {
            allTopic.judge.push(topicFactory.factory(data.paper[i]));
        } else if (data.paper[i].type === 'subjective') {
            allTopic.subjective.push(topicFactory.factory(data.paper[i]));
        }
    }

    return allTopic;
};

module.exports = Helper;