'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Hostel Schema
 */
var HostelSchema = new Schema({
	name: {
		type: String,
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	rooms: [{
		type: Schema.ObjectId,
		ref: 'Room'
	}],
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Hostel', HostelSchema);
