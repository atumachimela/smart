'use strict';


angular.module('core').service('Translations', ['$resource',
function($resource)  {

        this.getTranslation = function($scope, language) {
            var languageFilePath = '/modules/core/translation_' + language + '.json'; 
            console.log(languageFilePath);
            $resource(languageFilePath).get(function (data) {
                $scope.translation = data;
            });
        };
    }
]);


// 'translation_' + language + '.json'