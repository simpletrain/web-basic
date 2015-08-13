var Topic = require('./topic');

function FillInBlanks(question,options,answer,score,input){
    Topic.call(this,'fill_in_blanks',question,options,answer,score,input);
}

FillInBlanks.prototype = Object.create(Topic.prototype);
FillInBlanks.prototype.constructor = FillInBlanks;

module.exports = FillInBlanks;