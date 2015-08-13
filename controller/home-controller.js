function HomeController(){

}


HomeController.prototype.firstCall = function(req,res){
    res.render('index',{

    });
};






module.exports = HomeController;