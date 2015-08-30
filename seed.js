var db = require("./models");

var phrases = [
		{word: "HTTP", definition: "Part of the application layer of Internet protocol suite that is used to transfer media across the world wide web"},
		{word: "Mongoose", definition: "This provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box."},
		{word: "Jasmine", definition: "A behavior-driven development framework for testing JavaScript code."},
		{word: "Express", definition: "A configurable, minimal web framework for Node."},
		{word: "Bootstrap", definition: "A front-end framework created by a small team of developers at Twitter and maintained by a much larger community of contributors."}
];

// db.Phrase.remove({}, function(err, phrases){

	db.Phrase.create(phrases, function(err, phrases){
	  if (err) { return console.log(err) };
	    console.log("added", phrases.length, "phrases")
	    process.exit();
	})  
// });
