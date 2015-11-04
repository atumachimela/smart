'use strict';

// Rooms controller
angular.module('rooms').controller('RoomsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Rooms','HostelRooms',
	function($scope, $stateParams, $location, Authentication, Rooms, HostelRooms ) {
		$scope.authentication = Authentication;


		$scope.addRooms = function() {
			var hostelId = $stateParams.hostelId;
      // Create new room object
      var room = new HostelRooms({
          body: $scope.room,
          hostel: hostelId
      });

      console.log($stateParams.hostelId);
      // Redirect after save
      room.$save(function(response) {
          console.log(response);
          $location.path('hostels/'+ hostelId +'/rooms');

      }, function(errorResponse) {
          $scope.error = errorResponse.data.message;
      });
     };

		// Remove existing Room
		$scope.remove = function( room ) {
			if ( room ) { room.$remove();

				for (var i in $scope.rooms ) {
					if ($scope.rooms [i] === room ) {
						$scope.rooms.splice(i, 1);
					}
				}
			} else {
				$scope.room.$remove(function() {
					// $location.path('rooms');
				});
			}
		};

		// Update existing Room
		$scope.update = function() {
			var room = $scope.room ;

			room.$update(function() {
				// $location.path('rooms/' + room._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Rooms
		$scope.find = function() {
			$scope.room = Rooms.query();
		};

		// Find existing Room
		$scope.findOne = function() {
			$scope.room = Rooms.get({
				roomId: $stateParams.roomId
			});
		};
	}
]);
