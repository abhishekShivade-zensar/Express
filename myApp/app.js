var express = require('express');

var app = express();

var MongoClient = require ('mongodb').MongoClient;

var connectionString = "mongodb://127.0.0.1:27017/zensarEmployees"
var dbobj;
var db;

app.get('/', function(req, resp){
    dbobj.collection("EmployeeMasterData").findOne({}, function(err,res) { 
        if(err) console.error(err);

        
        resp.send(res.FirstName);
        resp.send(res.LastName);
        resp.send(res.ID);
        resp.send(res.Address);
        db.close();
    });

})

app.listen(3000, function(){
    MongoClient.connect(connectionString, { useUnifiedTopology: true }, function(err,db) {
        if(err) console.error(err);
        console.log("DB Connected");
        dbobj= db.db("zensarEmployees");
    });
    
    console.log('app.js is listening to http://localhost:3000/');
});