exports.setRoutes = function(app) {
    app.use('/', require('./routers/home'));
};