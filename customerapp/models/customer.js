var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CustSchema = new Schema({
	poster_path:String,
	original_title:String,
	release_date:String,
	popularity:String,
	vote_average: String

});


module.exports = mongoose.model('Customer',CustSchema);