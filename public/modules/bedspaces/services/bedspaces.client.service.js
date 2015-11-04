'use strict';

//Bedspaces service used to communicate Bedspaces REST endpoints
angular.module('bedspaces').factory('Bedspaces', ['$resource',
	function($resource) {
		return $resource('bedspaces/:bedspaceId', { bedspaceId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);