var	config = require('./env/development'),
	mongoose = require('mongoose');

module.exports = function() {
  	var db = mongoose.connect(config.db);

  	require('../models/user');

  	return db;
};