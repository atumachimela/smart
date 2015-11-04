'use strict';

// Configuring the Articles module
angular.module('bedspaces').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Bedspaces', 'bedspaces', 'dropdown', '/bedspaces(/create)?');
		Menus.addSubMenuItem('topbar', 'bedspaces', 'List Bedspaces', 'bedspaces');
		Menus.addSubMenuItem('topbar', 'bedspaces', 'New Bedspace', 'bedspaces/create');
	}
]);