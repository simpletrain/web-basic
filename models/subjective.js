var Topic = require('./topic');

function Subjective(question,options,answer,score,input){
    Topic.call(this,'subjective',question,options,answer,score,input);
}

Subjective.prototype = Object.create(Topic.prototype);
Subjective.prototype.constructor = Subjective;

Subjective.prototype.mark = function(){
    return 0;
};

module.exports = Subjective;