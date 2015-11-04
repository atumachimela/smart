'use strict';

// Bedspaces controller
angular.module('bedspaces').controller('BedspacesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Bedspaces',
	function($scope, $stateParams, $location, Authentication, Bedspaces ) {
		$scope.authentication = Authentication;

		// Create new Bedspace
		$scope.create = function() {
			// Create new Bedspace object
			var bedspace = new Bedspaces ({
				name: this.name
			});

			// Redirect after save
			bedspace.$save(function(response) {
				$location.path('bedspaces/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Bedspace
		$scope.remove = function( bedspace ) {
			if ( bedspace ) { bedspace.$remove();

				for (var i in $scope.bedspaces ) {
					if ($scope.bedspaces [i] === bedspace ) {
						$scope.bedspaces.splice(i, 1);
					}
				}
			} else {
				$scope.bedspace.$remove(function() {
					$location.path('bedspaces');
				});
			}
		};

		// Update existing Bedspace
		$scope.update = function() {
			var bedspace = $scope.bedspace ;

			bedspace.$update(function() {
				$location.path('bedspaces/' + bedspace._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Bedspaces
		$scope.find = function() {
			$scope.bedspaces = Bedspaces.query();
		};

		// Find existing Bedspace
		$scope.findOne = function() {
			$scope.bedspace = Bedspaces.get({ 
				bedspaceId: $stateParams.bedspaceId
			});
		};
	}
]);