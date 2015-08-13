function Score(){
    this.score = 0;
}

Score.prototype.markAll = function(topics){
    for(var topic in topics){
        for(var i = 0;i < topics[topic].length; i++){
            this.score += topics[topic][i].mark();
        }
    }
};



module.exports = Score;