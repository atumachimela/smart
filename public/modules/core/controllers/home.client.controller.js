'use strict';

angular.module('core').controller('HomeController', ['$scope', '$modal', 'Authentication', 'Menus', '$compile', '$log', 'Translations',
	function($scope, $modal, Authentication, Menus, $compile, $log, Translations) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		// $scope.hideMrk = true;

		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});


		$scope.viewFabricator = function(){
			triggerFabModal();
		};
		$scope.viewProcurer = function(){
			triggerProcureModal();
		};
		$scope.viewSafetyMat = function(){
			triggerSafetyModal();
		};
		$scope.viewRental = function(){
			triggerRentalModal();
			console.log('rent');
		};


		var triggerFabModal = function(){
			var contentModal = $modal.open({
	          templateUrl: '/modules/core/views/faabricationModalContent.client.view.html',
	          controller: function($scope, $modalInstance) {
	            $scope.ok = function(data) {
	              $modalInstance.close();
	            };
	            $scope.cancel = function() {
	              $modalInstance.dismiss('cancel');
	            };
	          },
	          // windowClass: 'modal-fit',

	          size: 'lg',
	          resolve: {
	            listData: function() {
	              return true;
	            }
	          }
	        });
		};
		var triggerProcureModal = function(){
			var contentModal = $modal.open({
	          templateUrl: '/modules/core/views/procurementModalContent.client.view.html',
	          controller: function($scope, $modalInstance) {
	            $scope.ok = function(data) {
	              $modalInstance.close();
	            };
	            $scope.cancel = function() {
	              $modalInstance.dismiss('cancel');
	            };
	          },
	          // windowClass: 'modal-fit',

	          size: 'lg',
	          resolve: {
	            listData: function() {
	              return true;
	            }
	          }
	        });
		};

		var triggerSafetyModal = function(){
			var contentModal = $modal.open({
	          templateUrl: '/modules/core/views/safetyMaterialsModalContent.client.view.html',
	          controller: function($scope, $modalInstance) {
	            $scope.ok = function(data) {
	              $modalInstance.close();
	            };
	            $scope.cancel = function() {
	              $modalInstance.dismiss('cancel');
	            };
	          },
	          // windowClass: 'modal-fit',

	          size: 'lg',
	          resolve: {
	            listData: function() {
	              return true;
	            }
	          }
	        });
		};
		
		var triggerRentalModal = function(){
			var contentModal = $modal.open({
	          templateUrl: '/modules/core/views/rentalModalContent.client.view.html',
	          controller: function($scope, $modalInstance) {
	            $scope.ok = function(data) {
	              $modalInstance.close();
	            };
	            $scope.cancel = function() {
	              $modalInstance.dismiss('cancel');
	            };
	          },
	          // windowClass: 'modal-fit',

	          size: 'lg',
	          resolve: {
	            listData: function() {
	              return true;
	            }
	          }
	        });
		};
		// $scope.hidePage = function(){
		// 	$scope.hideMrk = false;
		// 	console.log('ree');
		// };
			//Run translation if selected language changes

		$scope.translate = function(){
			console.log('testing');
	       Translations.getTranslation($scope, $scope.selectedLanguage);
		};   
			$scope.selectedLanguage = 'en';
			$scope.translate();	

		function ExampleController ($scope) {
			angular.extend($scope, {
				centerProperty: {
					lat: 45,
					lng: -73
				},
				zoomProperty: 12,
				markersProperty: [ {
						latitude: 45,
						longitude: -74
					}],
				clickedLatitudeProperty: null,	
				clickedLongitudeProperty: null,
			});
		}

	}
]);
