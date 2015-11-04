'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors'),
	Bedspace = mongoose.model('Bedspace'),
	Room = mongoose.model('Room'),
	_ = require('lodash');
/**
 * Create a Bedspace
 */
exports.create = function(req, res) {
	var bedspace = new Bedspace(req.body);
	bedspace.user = req.user;
	bedspace.room = req.room;
	bedspace.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			req.room.bedspaces.push(bedspace);
			req.room.save(function(err){
				if(!err)
					res.jsonp(bedspace);
			});
		}
	});
};

/**
 * Show the current Bedspace
 */
exports.read = function(req, res) {
	res.jsonp(req.bedspace);
};

/**
 * Update a Bedspace
 */
exports.update = function(req, res) {
	var bedspace = req.bedspace ;

	bedspace = _.extend(bedspace , req.body);

	bedspace.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(bedspace);
		}
	});
};

/**
 * Delete an Bedspace
 */
exports.delete = function(req, res) {
	var bedspace = req.bedspace ;
	var room = req.room;
	if(room && room.bedspaces){
		var i = room.bedspaces.indexOf(bedspace._id);
		room.bedspaces.splice(i,1);
	}

	bedspace.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(bedspace);
		}
	});
};

/**
 * List of Bedspaces
 */
exports.list = function(req, res) { Bedspace.find({room:req.room}).sort('-created').populate('user', 'displayName').populate('room', 'name capacity').exec(function(err, bedspaces) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(bedspaces);
		}
	});
};

/**
 * Bedspace middleware
 */
exports.bedspaceByID = function(req, res, next, id) { Bedspace.findById(id).populate('user', 'displayName').populate('room', 'name capacity').exec(function(err, bedspace) {
		if (err) return next(err);
		if (! bedspace) return next(new Error('Failed to load Bedspace ' + id));
		req.bedspace = bedspace ;
		next();
	});
};

/**
 * Bedspace authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.bedspace.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};
