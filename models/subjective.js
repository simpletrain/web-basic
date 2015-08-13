var Topic = require('./topic');

function Subjective(question,options,answer,score,input){
    Topic.call(this,'subjective',question,options,answer,score,input);
}

Subjective.prototype = Object.create(Topic.prototype);
Subjective.prototype.constructor = Subjective;

Subjective.prototype.mark = function(){
    var score = 0;

    if(this.input === this.answer){
        score += this.score;
    }

    return score;
};

module.exports = Subjective;