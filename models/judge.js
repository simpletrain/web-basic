var Topic = require('./topic');

function Judge(question,options,answer,score,input){
    Topic.call(this,'judge',question,options,answer,score,input);
}

Judge.prototype = Object.create(Topic.prototype);
Judge.prototype.constructor = Judge;


module.exports = Judge;