var express = require("express"),
  app = express(),
  path = require("path"),
  bodyParser = require("body-parser"),
  _ = require("underscore"),
  views = path.join(process.cwd(), "views/");

var db = require("./models");


app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));

app.use(bodyParser.urlencoded({ extended: true }));



/*
***** REMOVE *****
var phrases = [
		{word: "HTTP", definition: "Part of the application layer of Internet protocol suite that is used to transfer media across the world wide web"},
		{word: "Mongoose", definition: "This provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box."},
		{word: "Jasmine", definition: "A behavior-driven development framework for testing JavaScript code."},
		{word: "Express", definition: "A configurable, minimal web framework for Node."},
		{word: "Bootstrap", definition: "A front-end framework created by a small team of developers at Twitter and maintained by a much larger community of contributors."}
];
***** REMOVE *****
*/


// ROUTES
app.get("/", function (req, res) {
  res.sendFile(path.join(views + "index.html"));
});


app.get("/phrases", function (req, res) {
  db.Phrase.find({}, function (err, phrases) {
    if (err) {
      console.log(err);
      return res.sendStatus(400);
    }
    res.send(phrases);
  })
});

app.post("/phrases", function (req, res) { 
  var newPhrase = req.body;
  db.Phrase.create(newPhrase, function (err, phrase) {
    if (err) {
      console.log(err);
      return res.sendStatus(400);
    }
    res.send(phrase);
  })
});


app.delete("/phrases/:id", function (req, res) {
  var id = req.params.id;
  db.Phrase.remove({_id: id}, function(err, phrase) {
    if (err) {
      console.log(err);
      return res.sendStatus(400);
    }
    res.sendStatus(200);
  })
});




app.listen(3000, function() {
  console.log("Running on port 3000");
});