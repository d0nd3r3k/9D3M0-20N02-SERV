const request = require('request');
var buff="";

exports.sendToBuffer = function(message){
    buff=message;
}

exports.getData = function(req, res){
    res.send(buff);
};
