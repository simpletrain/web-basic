var data = require('../seed/data.json');
var TopicFactory = require('../models/factory.js');

function HomeController(){

}


HomeController.prototype.firstCall = function(req,res){
    var title = data.title;

    var allTopic = {
        fill_in_blanks:[],
        single_choice:[],
        multi_choice:[],
        judge:[],
        subjective:[]
    };

    var topicFactory = new TopicFactory;

    for(var i = 0; i < data.paper.length; i++){
        if(data.paper[i].type === 'fill_in_blanks'){
            allTopic.fill_in_blanks.push(topicFactory.factory(data.paper[i]));
        } else if(data.paper[i].type === 'single_choice'){
            allTopic.single_choice.push(topicFactory.factory(data.paper[i]));
        } else if(data.paper[i].type === 'multi_choice'){
            allTopic.multi_choice.push(topicFactory.factory(data.paper[i]));
        } else if(data.paper[i].type === 'judge'){
            allTopic.judge.push(topicFactory.factory(data.paper[i]));
        } else if(data.paper[i].type === 'subjective'){
            allTopic.subjective.push(topicFactory.factory(data.paper[i]));
        }
    }


    console.log(allTopic);



    res.render('index',{
        title : title,
        class_name : '',
        id_number : '',
        student_name : '',
        allTopic : allTopic
    });
};



HomeController.prototype.secondCall = function(req,res){
    var title = data.title;

    var allTopic = {
        fill_in_blanks:[],
        single_choice:[],
        multi_choice:[],
        judge:[],
        subjective:[]
    };

    var topicFactory = new TopicFactory;

    for(var i = 0; i < data.paper.length; i++){
        if(data.paper[i].type === 'fill_in_blanks'){
            allTopic.fill_in_blanks.push(topicFactory.factory(data.paper[i]));
        } else if(data.paper[i].type === 'single_choice'){
            allTopic.single_choice.push(topicFactory.factory(data.paper[i]));
        } else if(data.paper[i].type === 'multi_choice'){
            allTopic.multi_choice.push(topicFactory.factory(data.paper[i]));
        } else if(data.paper[i].type === 'judge'){
            allTopic.judge.push(topicFactory.factory(data.paper[i]));
        } else if(data.paper[i].type === 'subjective'){
            allTopic.subjective.push(topicFactory.factory(data.paper[i]));
        }
    }

    var originInput = req.body;

    console.log(originInput);



    res.render('index',{
        title : title,
        class_name : '',
        id_number : '',
        student_name : '',
        allTopic : allTopic
    });
};






module.exports = HomeController;