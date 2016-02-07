'use strict';

angular.module('core').controller('HomeController', ['$scope','$http', '$mdToast', '$animate', '$modal', 'Authentication', 'Menus', '$compile', '$log', 'Translations',
  function($scope, $http, $mdToast, $animate, $modal, Authentication, Menus, $compile, $log, Translations) {
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
    
    $scope.toggle = false;
    $scope.toggleMap = false;
    $scope.toggle = false;
    $scope.toggleMap = false;
    $scope.toggleClient = false;
    $scope.showContactForm = true;
    $scope.showContactList = true;
    $scope.showContactNote = true;
    $scope.hideContactHeader = true;
    $scope.mapToggle = false;
    $scope.mapToggle1 = false;
    $scope.user = {};

    $scope.mapTrigger = function() {
        $scope.toggleMap = true;
        $scope.mapToggle1 = true;
        $scope.mapToggle = true;
    };
    $scope.toggleMapClose = function() {
        $scope.toggleMap = false;
        $scope.mapToggle1 = false;
        $scope.mapToggle = false;
    };
    $scope.showContactFormCtrl = function(){
        $scope.showContactForm = false;
        $scope.showContactList = false;
        $scope.showContactNote = false;
        $scope.hideContactHeader = false;

    };
    $scope.closeContactForm = function(){
        $scope.showContactForm = true;
        $scope.showContactList = true;
        $scope.showContactNote = true;
        $scope.hideContactHeader = true;

    };

    $scope.sendMail = function() {
         $http.post('/sendmail', $scope.user).success(function(response) {
           $scope.user = {};
            $scope.closeContactForm();
        }).error(function(error) {
            $scope.closeContactForm();
            $scope.error = error.message;
         });
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