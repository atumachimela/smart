'use strict';

// Configuring the Articles module
angular.module('hostels')
.run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Hostels', 'hostels', 'dropdown', '/hostels(/create)?');
		Menus.addSubMenuItem('topbar', 'hostels', 'List Hostels', 'hostels');
		Menus.addSubMenuItem('topbar', 'hostels', 'New Hostel', 'hostels/create');
	}
]);
// .run(['Menus',
//   function(Menus) {
//     // Set top bar menu items
//     Menus.addMenuItem('topbar', 'Rooms', 'rooms', 'dropdown', '/rooms(/create)?');
//     Menus.addSubMenuItem('topbar', 'rooms', 'List Rooms', 'hostels/:hostelId/rooms');
//     Menus.addSubMenuItem('topbar', 'rooms', 'New Room', 'hostels/:hostelId/rooms/create');
//   }
// ]);
