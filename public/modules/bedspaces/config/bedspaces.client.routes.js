'use strict';

//Setting up route
angular.module('bedspaces').config(['$stateProvider',
	function($stateProvider) {
		$stateProvider.
		// Bedspaces state routing
		state('listBedspaces', {
			url: '/rooms/:roomId/bedspaces',
			templateUrl: 'modules/bedspaces/views/list-bedspaces.client.view.html'
			}).
		state('createBedspace', {
			url: '/rooms/:roomId/bedspaces/create',
			templateUrl: 'modules/bedspaces/views/create-bedspace.client.view.html'
			}).
		state('viewBedspace', {
			url: '/rooms/:roomId/bedspaces/:bedspaceId',
			templateUrl: 'modules/bedspaces/views/view-bedspace.client.view.html'
			}).
		state('editBedspace', {
			url: '/rooms/:roomId/bedspaces/:bedspaceId/edit',
			templateUrl: 'modules/bedspaces/views/edit-bedspace.client.view.html'
		});
	}
]);
