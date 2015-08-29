var express = require("express"),
		app = express(),
		path = require("path"),
		bodyParser = require("body-parser"),
		_ = require("underscore"),
		views = path.join(process.cwd(), "views/"),
		//db = require("./models");



app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));
// body parser
app.use(bodyParser.urlencoded({ extended: true }));