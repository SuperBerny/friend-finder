//Dependencies
//==========================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var friends = require('./app/data/friends.js');

// console.log(friends);
//Sets up an instance for Express app
//==========================================================
var app = express();

//Port used for localhost
//==========================================================
var port = process.env.PORT || 3000;

//Sets up Express app to handle data parsin
//==========================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}))

//Routes
//==========================================================

//Sends user to homepage
app.get("/", function(req, res) {
   res.sendFile(path.join(__dirname, "public/home.html"));
});

//sends user to survey page
app.get("/survey", function(req, res){
   res.sendFile(path.join(__dirname, "public/survey.html"));
});

//View all Profiles
app.get("/api/friends", function(req, res){
   res.json(friends);
});

//Post into Profiles array after answering all 

//Start server and begins listening
app.listen(process.env.PORT || 3000, function(req, res){
   console.log("App listening on PORT " + PORT);
});