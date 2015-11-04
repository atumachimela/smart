'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var bedspaces = require('../../app/controllers/bedspaces');

	// Bedspaces Routes
	app.route('/rooms/:roomId/bedspaces')
		.get(bedspaces.list)
		.post(users.requiresLogin, bedspaces.create);

	app.route('/rooms/:roomId/bedspaces/:bedspaceId')
		.get(bedspaces.read)
		.put(users.requiresLogin, bedspaces.hasAuthorization, bedspaces.update)
		.delete(users.requiresLogin, bedspaces.hasAuthorization, bedspaces.delete);

	// Finish by binding the Bedspace middleware
	app.param('bedspaceId', bedspaces.bedspaceByID);
};
