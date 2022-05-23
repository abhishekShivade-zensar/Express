var express = require('express');

var app = express();

var cb0 = function(req,res,next){
    console.log('CB0');
    next();
}

var cb1 = function(req,res,next){
    console.log('CB1');
    next();
}

var cb2 = function(req,res){
    res.send('Hello from C!');
}


app.get('/', function(req,res){
});

app.get('/example/c', [cb0,cb1,cb2]);

app.listen(4000, function(){
    
    console.log('app.js is listening to http://localhost:4000/');
});