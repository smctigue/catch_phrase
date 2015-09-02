var db = require("./models");

var phrases = [{
  word: "HTTP",
  definition: "Part of the application layer of Internet protocol suite that is used to transfer media across the world wide web."
}, {
  word: "Mongoose",
  definition: "This provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box."
}, {
  word: "Jasmine",
  definition: "A behavior-driven development framework for testing JavaScript code."
}, {
  word: "SQL",
  definition: "A special-purpose programming language designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."
}, {
  word: "Express",
  definition: "A configurable, minimal web framework for Node."
}, {
  word: "Bootstrap",
  definition: "A front-end framework created by a small team of developers at Twitter and maintained by a much larger community of contributors."
}, {
  word: "jQuery",
  definition: "A fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers."
}, {
  word: "Node.js",
  definition: "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications."
}, {
  word: "AJAX",
  definition: "A group of interrelated Web development techniques used on the client-side to create asynchronous Web applications. With Ajax, web applications can send data to and retrieve from a server asynchronously (in the background) without interfering with the display and behavior of the existing page."
}, {
  word: "SQLite",
  definition: "A software library that implements a self-contained, server-less, zero-configuration, transactional SQL database engine."
}];


db.Phrase.remove({}, function(err, result) {
  console.log("Removed", phrases.length, "phrases");

  db.Phrase.create(phrases, function(err, phrases) {
    if (err) {
      return console.log(err);
    };
    console.log("Added", phrases.length, "phrases");
    process.exit();
  });
});