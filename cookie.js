var express = require('express');
var cookieParser = require('cookie-parser');
const res = require('express/lib/response');
var cookieValidator = require('cookie-validator');

var app = express();

async function validateCookies(req,res,next){
    await cookieValidator(req.cookies);
    next();
}

app.use(cookieParser());
app.use(validateCookies)

app.use((err,res,next) =>{
    res.status(400).send(err.message);
});

app.get('/',(req,res) =>{
    res.send("Hello World!");
});

app.listen(4000, function(){
    
    console.log('app.js is listening to http://localhost:4000/');
});