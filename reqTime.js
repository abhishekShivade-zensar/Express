var express = require('express');

var app = express();

var requestTime = function(req,res,next){
    req.requestTime = Date.now();
    next();
}

app.use(requestTime)

app.get('/',(req,res) =>{
    let responseText = 'Hello World!<br>'
    responseText += `<small>Requested at: ${req.requestTime}</small>`
    res.send(responseText);
});

app.listen(4000, function(){
    
    console.log('app.js is listening to http://localhost:4000/');
});