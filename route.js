var express = require('express');

var app = express();

app.get('/', function(req,res){
    // res.send('Hell from A!');
});

app.get('/example/a', function(req,res){
    res.send('Hello from A!');
});

app.get('/example/b', function(req,res,next){
    console.log('the respose will be sent by next function....');
    next();
}, function(req,res){res.send("Hello from B!")})

app.listen(4000, function(){
    
    console.log('app.js is listening to http://localhost:4000/');
});