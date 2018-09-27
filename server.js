require("dotenv").config();
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
// var path = require("path");
// modules needed for passport user auth
var passport = require("passport");
var session = require("express-session");
require("dotenv").config();
var db = require("./models");
var cors = require("cors");
var jwt = require('jwt-simple');

var PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// For Passport
// creates session secret
app.use(
  session({ secret: process.env.PASSPORT_SECRET, resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
// persistent login sessions
app.use(passport.session());
//load passport strategies
require("./config/passport")(passport, db.User, db, db.Portfolio);

// Routes
require("./controllers/routes/auth.js")(app, passport);
require("./controllers/routes/apiRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// NODE_ENV is an environment variable that is automatically set by Heroku. Need this for getting React app to work with heroku
if (process.env.NODE_ENV === "production") {
  // if any get request comes in for a route and the server doesn't know what it's looking for we send it took into the client/build and check if theres a file for it in /static/js/main.js. If there is then respond with that. app.use will return the file and the rest of the if statement wont run
  app.use(express.static('client/build'));
  
  // if someone makes a route request and it can't be found in client/build because the route handler is through React Router, just serve up the index.html doc 
  var path = require('path');
  app.get('*'), (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  } 
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
