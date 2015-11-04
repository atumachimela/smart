'use strict';

// Hostels controller
angular.module('hostels').controller('HostelsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Hostels', 'Rooms', 'HostelRooms',
	function($scope, $stateParams, $location, Authentication, Hostels, Rooms, HostelRooms) {
		$scope.authentication = Authentication;

		// Create new Hostel
		$scope.create = function() {
			// Create new Hostel object
			var hostel = new Hostels($scope.hostel);

			// Redirect after save
			hostel.$save(function(response) {
				$location.path('hostels/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Hostel
		$scope.remove = function( hostel ) {
			if ( hostel ) { hostel.$remove();

				for (var i in $scope.hostels ) {
					if ($scope.hostels [i] === hostel ) {
						$scope.hostels.splice(i, 1);
					}
				}
			} else {
				$scope.hostel.$remove(function() {
					$location.path('hostels');
				});
			}
		};

		// Update existing Hostel
		$scope.update = function() {
			var hostel = $scope.hostel ;

			hostel.$update(function() {
				$location.path('hostels/' + hostel._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Hostels
		$scope.find = function() {
			$scope.hostels = Hostels.query();
		};

		$scope.findRooms = function() {
			$scope.rooms = HostelRooms.query({
				hostelId: $stateParams.hostelId
			});
		};
		//Find one Room in a Hostel
		$scope.findOneRoom = function(){
			$scope.room = HostelRooms.get({hostelId: $stateParams.hostelId});
		};

		// Remove a room in a hostel
		$scope.deleteRoom = function(){
			$scope.hostel = HostelRooms.query({hostelId: $stateParams.hostelId});
			console.log($scope.hostel);
			// if($scope.hostel.rooms){

			// }
			// 	$scope.room = room.remove();
			// 	for(var i in $scope.rooms){
			// 		if($scope.rooms[i] === room){
			// 			$scope.rooms.splice(i,1);
			// 			}
			// 		}
			// }
		};

		$scope.deleteRoom();


		// Find existing Hostel
		$scope.findOne = function() {
			$scope.hostel = Hostels.get({
				hostelId: $stateParams.hostelId
			});
		};
	}
]);
