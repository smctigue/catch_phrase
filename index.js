var express = require("express"),
		app = express(),
		path = require("path"),
		bodyParser = require("body-parser"),
		_ = require("underscore"),
		views = path.join(process.cwd(), "views/"),
		db = require("./models");


app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));

app.use(bodyParser.urlencoded({ extended: true }));

//Hardcoded data
var phrases = [
		{id: 0, word: "HTTP", definition: "Part of the application layer of Internet protocol suite that is used to transfer media across the world wide web"},
		{id: 1, word: "Mongoose", definition: "This provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box."},
		{id: 2, word: "Jasmine", definition: "A behavior-driven development framework for testing JavaScript code."},
		{id: 3, word: "Express", definition: "A configurable, minimal web framework for Node."},
		{id: 4, word: "Bootstrap", definition: "A front-end framework created by a small team of developers at Twitter and maintained by a much larger community of contributors."}
];


// ROUTES
app.get("/", function (req, res){
  res.sendFile(path.join(views + "index.html"));
});

app.get("/phrases", function (req, res) {
	
});

















app.listen(3000, function (){
  console.log("listening on port 3000");
});
