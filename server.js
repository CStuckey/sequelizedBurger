var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Require our models for syncing
var db = require("./models");


// Set up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

// Static Directory - content for the app from the "public" directory in the application directory.
app.use(express.static("./public"));
app.use(require('./controllers/burgers_controllers.js'));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Syncing sequelize models and start express app
db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("App listening on PORT " + PORT);
	});
});
