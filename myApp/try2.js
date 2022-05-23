var express = require('express');

var app = express();

var MongoClient = require('mongodb').MongoClient;

var connectionString = "mongodb://127.0.0.1:27017/zensarEmployees";

var dbobj;
var db;

app.get('/', function (req, resp) {

    dbobj.collection("EmployeeMasterData").find({}).toArray(function (err, res) {
        if (err) console.error(err);

        var output = '<html><header><title> DB</title></header><body>'
        output += '<h1>EmployeeMasterData</h1>'
        output += '<table><tr><td><b>FirstName</b></td><td><b>LastName</b></td><td><b>ID</b></td><td><b>Address</b></td></tr>'
        res.forEach(function(todo){
            output += '<tr><td>'+ todo.FirstName + '</td>'+'<td>'+ todo.LastName + '</td>'+'<td>' + todo.ID + '</td>'+'<td>'+ todo.Address + '</td>'+'</tr>'
        });
        output += '</table></body></html>'
        resp.send(output);
        console.log(res);
        // console.log(res.forEach(function(todo){
        //     "Employee ID : " +  todo.ID;
        // })
        // );
    });

    

    // app.get('/$resp.id')
    
});

app.listen(3001, function () {
    MongoClient.connect(connectionString, function (err, db) {
        if (err) console.error(err);
        console.log("DB Connected");
        dbobj = db.db("zensarEmployees");
        
    });
    console.log('app.js is listening to http://localhost:3001/');
    
});

