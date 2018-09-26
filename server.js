require("dotenv").config();
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var path = require("path");
// modules needed for passport user auth
var passport = require("passport");
var session = require("express-session");
require("dotenv").config();
var db = require("./models");
var cors = require("cors");

var PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());

// For Passport
// creates session secret
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
// persistent login sessions
app.use(passport.session());
//load passport strategies
require("./config/passport")(passport, db.User, db, db.Portfolio);

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./controllers/routes/auth.js")(app, passport);
require("./controllers/routes/apiRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
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
