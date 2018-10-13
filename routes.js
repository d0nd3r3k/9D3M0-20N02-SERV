const main = require('./controllers/main');

module.exports = function(app){
    //General Routes
    app.get("/", function(req, res){
        res.sendFile(__dirname + '/public/index.html');
    });

    app.get('/api/esp',main.getData);
}
