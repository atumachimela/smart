'use strict';

// //Setting up route
angular.module('rooms').config(['$stateProvider',
	function($stateProvider) {
		$stateProvider.
		// Rooms state routing
		state('listRooms', {
			url: '/hostels/:hostelId/rooms',
			templateUrl: 'modules/rooms/views/list-rooms.client.view.html'
		}).
		state('createRoom', {
			url: '/hostels/:hostelId/rooms/create',
			templateUrl: 'modules/rooms/views/create-room.client.view.html'
		}).
		state('viewRoom', {
			url: '/hostels/:hostelId/rooms/:roomId',
			templateUrl: 'modules/rooms/views/view-room.client.view.html'
		}).
		state('editRoom', {
			url: '/hostels/:hostelId/rooms/:roomId/edit',
			templateUrl: 'modules/rooms/views/edit-room.client.view.html'
		});
	}
]);
