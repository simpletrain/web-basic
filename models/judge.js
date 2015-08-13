var Topic = require('./topic');

function Judge(question,options,answer,score,input){
    Topic.call(this,'judge',question,options,answer,score,input);
}

Judge.prototype = Object.create(Topic.prototype);
Judge.prototype.constructor = Judge;

Judge.prototype.mark = function(){
    return 0;
};

module.exports = Judge;