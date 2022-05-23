var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
const dburl = "mongodb://127.0.0.1:27017/zensarEmployees";
const dbname = 'zensarEmployeesMS';
const collname = 'EmployeeMasterData';
app.get('/', function(req, res) {
    MongoClient.connect(dburl, function(err, client) {
        if (!err) {
            const db = client.db(dbname);
            const collection = db.collection(collname);

collection.find({}).toArray(function(err, todos) {
    if (!err) {
        var output = '<html><header><title> DB</title></header><body>';
        output += '<h1>DB</h1>';
        output += '<table border="1"><tr><td><b>' + 'Name' + '</b></td><td><b>' + 'ID' + '</b></td></tr>';
        todos.forEach(function(todo){
            output += '<tr><td>' + todo.Name + '</td><td>' + todo.Employee_id + '</td></tr>';
    });
    output += '</table></body></html>'
    res.send(output);
    console.log(todos);
    }
        });
        client.close();
        }
    });
});
app.listen(3001, function() {
    console.log('running on 3001')
});

