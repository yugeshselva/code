var express = require('express');
var app = express();  
app.get('/user', function(req, res){
        response = {

            first_name : req.query.uname,
            dob : req.query.dob,
            age: req.query.age,
	    address:req.query.address,
	    pinCode:req.query.pin
            };
        console.log(response);
var MongoClient = require('mongodb').MongoClient;
var d = MongoClient.connect("mongodb://localhost:27017/yugesh", function(err, db) {
  if(!err) {
    console.log("We are connected");
}
d = db.db("yugesh");
d.collection("collections").insertOne(response, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });

});

        res.end(JSON.stringify(response));	
    });
app.get('/delete', function(req, res){
        response = {
            first_name : req.query.uname
            };
        console.log(response);
var MongoClient = require('mongodb').MongoClient;
var d = MongoClient.connect("mongodb://localhost:27017/yugesh", function(err, db) {
  if(!err) {
    console.log("We are connected");
}
d = db.db("yugesh");
d.collection("collections").deleteOne(response, function(err, res) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });

});
        res.end(JSON.stringify(response));
    });

var server = app.listen(4100, function(){
        var host = server.address().address;
        var port = server.address().port;
console.log("Example app listening at http://%s:%s", host, port);
    });
