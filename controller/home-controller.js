var data = require('../seed/data.json');

function HomeController(){

}


HomeController.prototype.firstCall = function(req,res){
    var title = data.title;



    res.render('index',{
        title:title
    });
};






module.exports = HomeController;