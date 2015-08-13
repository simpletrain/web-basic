var Topic = require('./topic');

function MultiChoice(question,options,answer,score,input){
    Topic.call(this,'multi_choice',question,options,answer,score,input);
}

MultiChoice.prototype = Object.create(Topic.prototype);
MultiChoice.prototype.constructor = MultiChoice;


module.exports = MultiChoice;