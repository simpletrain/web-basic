function getInputs(data,topics){
    for(var topic in topics){
        for(var i =0;i < topics[topic].length; i++){
            if(topics[topic][i].type + i){
                topics[topic][i].input = data[topics[topic][i].type + i];
            }
        }
    }
    return topics;
}




module.exports = getInputs;