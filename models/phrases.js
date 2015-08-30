var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PhraseSchema = new Schema({
	word: {
	  type: String,
	},
	definition: {
		type: String,
	}
})

var Phrase = mongoose.model("Phrase", PhraseSchema);

module.exports = Phrase;