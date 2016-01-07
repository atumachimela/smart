// 'use strict';

// angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus', 'Translations',
// 	function($scope, Authentication, Menus, Translations) {
// 		$scope.authentication = Authentication;
// 		$scope.isCollapsed = false;
// 		$scope.menu = Menus.getMenu('topbar');

// 		$scope.toggleCollapsibleMenu = function() {
// 			$scope.isCollapsed = !$scope.isCollapsed;
// 		};

// 		// Collapsing the menu after navigation
// 		$scope.$on('$stateChangeSuccess', function() {
// 			$scope.isCollapsed = false;
// 		});
// 			//Run translation if selected language changes
// 		$scope.translate = function(){
// 			console.log('testing');
// 	       Translations.getTranslation($scope, $scope.selectedLanguage);
// 		};   
// 		$scope.selectedLanguage = 'en';
// 		$scope.translate();	
// 	}
// ]);