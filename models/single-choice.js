var Topic = require('./topic');

function SingleChoice(question,options,answer,score,input){
    Topic.call(this,'single_choice',question,options,answer,score,input);
}

SingleChoice.prototype = Object.create(Topic.prototype);
SingleChoice.prototype.constructor = SingleChoice;


module.exports = SingleChoice;
