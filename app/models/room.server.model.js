'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Room Schema
 */
var RoomSchema = new Schema({
	name: {
		type: String,
		required: 'Please fill name',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	capacity: {
		type: Number
	},
	hostel: [{
		type: Schema.ObjectId,
		ref: 'Hostel'
	}],
	bedspaces: [{
		type: Schema.ObjectId,
		ref: 'Bedspace'
	}],
	isFull: {
		type: Boolean,
		default: false
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Room', RoomSchema);
