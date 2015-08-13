var Topic = require('./topic');

function Judge(question,options,answer,score,input){
    Topic.call(this,'judge',question,options,answer,score,input);
}

Judge.prototype = Object.create(Topic.prototype);
Judge.prototype.constructor = Judge;

Judge.prototype.mark = function(){
    var score = 0;

    if(this.input === this.answer){
        score += this.score;
    }

    return score;
};

module.exports = Judge;