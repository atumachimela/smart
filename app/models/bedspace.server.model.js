'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Bedspace Schema
 */
var BedspaceSchema = new Schema({
	name: {
		type: Array,
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	room: [{
			type: Schema.ObjectId,
			ref: 'Room'
	}],
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Bedspace', BedspaceSchema);
