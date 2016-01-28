'use strict';

angular.module('core').controller('HomeController', ['$scope', '$animate', '$modal', 'Authentication', 'Menus', '$compile', '$log', 'Translations',
	function($scope, $animate, $modal, Authentication, Menus, $compile, $log, Translations) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		// $scope.hideMrk = true;

		$scope.menu = Menus.getMenu('topbar');
        $scope.myInterval = 1000;

        $scope.slideMe = function() {
              $scope.slides = [
                {
                  image: 'http://lorempixel.com/400/200/'
                },
                {
                  image: 'http://lorempixel.com/400/200/food'
                },
                {
                  image: 'http://lorempixel.com/400/200/sports',
                  note: 'welcome'
                },
                
                {
                  image: 'http://lorempixel.com/400/200/people'
                }
            ];
        };
        $scope.slideMe();

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});
		
		$scope.toggle = false;
		$scope.toggleMap = false;
		$scope.toggleClient = false;
		$scope.toggleMapCtrl = true;
        $scope.mapTrigger = function() {
            $scope.toggleMap = true;
            $scope.toggleMapCtrl = false;
        };
        $scope.toggleMapClose = function() {
            $scope.toggleMap = false;
            $scope.toggleMapCtrl = true;
        };

		//Run translation if selected language changes

		$scope.translate = function(){
			console.log('testing');
	       Translations.getTranslation($scope, $scope.selectedLanguage);
		};   
			$scope.selectedLanguage = 'en';
			$scope.translate();	
	}
]);
