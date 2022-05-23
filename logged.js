var express = require('express');

var app = express();

var myLogger = function(req,res,next){
    console.log('LOGGED');
    next();
}

app.use(myLogger)

app.get('/',(req,res) =>{
    res.send("Hello World!");
});

app.listen(4000, function(){
    
    console.log('app.js is listening to http://localhost:4000/');
});