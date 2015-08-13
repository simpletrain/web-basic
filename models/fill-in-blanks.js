var Topic = require('./topic');

function FillInBlanks(question,options,answer,score,input){
    Topic.call(this,'fill_in_blanks',question,options,answer,score,input);
}

FillInBlanks.prototype = Object.create(Topic.prototype);
FillInBlanks.prototype.constructor = FillInBlanks;

FillInBlanks.prototype.mark = function(){
    return 0;
};


module.exports = FillInBlanks;