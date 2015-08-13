var Topic = require('./topic');

function SingleChoice(question,options,answer,score,input){
    Topic.call(this,'single_choice',question,options,answer,score,input);
}

SingleChoice.prototype = Object.create(Topic.prototype);
SingleChoice.prototype.constructor = SingleChoice;

SingleChoice.prototype.mark = function(){
    return 0;
};


module.exports = SingleChoice;
