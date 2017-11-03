//Dependencies
//==========================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var friends = require('./app/data/friends.js');

console.log(friends);
//Sets up an instance for Express app
//==========================================================
var app = express();

//Port used for localhost
//==========================================================
var PORT = 3000;

//Sets up Express app to handle data parsin
//==========================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}))


//Profiles to compare results to
//==========================================================
// var profiles = [
//    {
//       name: "StarLord",
//       photo: "https://vignette.wikia.nocookie.net/marvelmovies/images/5/59/Star-Lord_GOTG_Vol_2.jpg/revision/latest/scale-to-width-down/1000?cb=20170505225132",
//       scores: [

//       ]
//    },
//    {
//       name: "Gamora",
//       photo: "https://vignette.wikia.nocookie.net/marvelmovies/images/5/53/Gamora_GOTG_Vol_2.png/revision/latest/scale-to-width-down/1000?cb=20170505225432",
//       scores: [

//       ]
//    },
//    {
//       name: "Rocket",
//       photo: "https://vignette.wikia.nocookie.net/marvelmovies/images/2/27/Rocket_Raccoon_GOTG_Vol_2.png/revision/latest/scale-to-width-down/1000?cb=20170505225943",
//       scores: [

//       ]
//    },
//    {
//       name: 'Yondu',
//       photo: "https://vignette.wikia.nocookie.net/marvelmovies/images/1/16/Yondu_GOTG_Vol_2.png/revision/latest/scale-to-width-down/1000?cb=20170503005847",
//       scores: [

//       ]
//    },
//    {
//       name: "Drax",
//       photo: "https://vignette.wikia.nocookie.net/marvelmovies/images/7/7c/Drax_GOTG_Vol_2.jpg/revision/latest/scale-to-width-down/1000?cb=20170505225749",
//       scores: [

//       ]
//    },
//    {
//       name: "Ego",
//       photo: "https://vignette.wikia.nocookie.net/marvelmovies/images/a/aa/Ego_GOTG_Vol_2.png/revision/latest?cb=20170505230509",
//       scores: [
         
//       ]
//    }
// ];

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
app.get("/guardians", function(req, res){
   res.json(profiles);
});

//Post into Profiles array after answering all 

//Start server and begins listening
app.listen(PORT, function(req, res){
   console.log("App listening on PORT " + PORT);
});