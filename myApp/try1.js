var express = require('express');

var app = express();

var MongoClient = require ('mongodb').MongoClient;

var connectionString = "mongodb://127.0.0.1:27017/zensarEmployees"

app.get('/',function(req,res){
    res.send('Hello World!');
});

app.get('/about',function(req,res){
    res.send('about');
});

app.get('/random.txt', function(req,res){
    res.send('random.txt');
});

MongoClient.connect(connectionString, { useUnifiedTopology: true }, function(err,db) {
	if(err) console.error(err);
	console.log("DB Connected");
	var dbobj= db.db("zensarEmployees");

    dbobj.collection("EmployeeMasterData").findOne({}, function(err,res) { 
        if(err) console.error(err);

        
        // console.log(res.FirstName);
        // console.log(res.LastName);
        // console.log(res.ID);
        // console.log(res.Address);


        // res.send('FirstName');
        // print(res.FirstName);
        res.render("firstName",{FirstName: res.FirstName})
        db.close();
    });

});

app.listen(3001, function(){
    console.log('app.js is listening to http://localhost:3001/');
});