'use strict';

(function() {
	// Bedspaces Controller Spec
	describe('Bedspaces Controller Tests', function() {
		// Initialize global variables
		var BedspacesController,
		scope,
		$httpBackend,
		$stateParams,
		$location;

		// The $resource service augments the response object with methods for updating and deleting the resource.
		// If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
		// the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
		// When the toEqualData matcher compares two objects, it takes only object properties into
		// account and ignores methods.
		beforeEach(function() {
			jasmine.addMatchers({
				toEqualData: function(util, customEqualityTesters) {
					return {
						compare: function(actual, expected) {
							return {
								pass: angular.equals(actual, expected)
							};
						}
					};
				}
			});
		});

		// Then we can start by loading the main application module
		beforeEach(module(ApplicationConfiguration.applicationModuleName));

		// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
		// This allows us to inject a service but then attach it to a variable
		// with the same name as the service.
		beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {
			// Set a new global scope
			scope = $rootScope.$new();

			// Point global variables to injected services
			$stateParams = _$stateParams_;
			$httpBackend = _$httpBackend_;
			$location = _$location_;

			// Initialize the Bedspaces controller.
			BedspacesController = $controller('BedspacesController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one Bedspace object fetched from XHR', inject(function(Bedspaces) {
			// Create sample Bedspace using the Bedspaces service
			var sampleBedspace = new Bedspaces({
				name: 'New Bedspace'
			});

			// Create a sample Bedspaces array that includes the new Bedspace
			var sampleBedspaces = [sampleBedspace];

			// Set GET response
			$httpBackend.expectGET('bedspaces').respond(sampleBedspaces);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.bedspaces).toEqualData(sampleBedspaces);
		}));

		it('$scope.findOne() should create an array with one Bedspace object fetched from XHR using a bedspaceId URL parameter', inject(function(Bedspaces) {
			// Define a sample Bedspace object
			var sampleBedspace = new Bedspaces({
				name: 'New Bedspace'
			});

			// Set the URL parameter
			$stateParams.bedspaceId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/bedspaces\/([0-9a-fA-F]{24})$/).respond(sampleBedspace);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.bedspace).toEqualData(sampleBedspace);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(Bedspaces) {
			// Create a sample Bedspace object
			var sampleBedspacePostData = new Bedspaces({
				name: 'New Bedspace'
			});

			// Create a sample Bedspace response
			var sampleBedspaceResponse = new Bedspaces({
				_id: '525cf20451979dea2c000001',
				name: 'New Bedspace'
			});

			// Fixture mock form input values
			scope.name = 'New Bedspace';

			// Set POST response
			$httpBackend.expectPOST('bedspaces', sampleBedspacePostData).respond(sampleBedspaceResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the Bedspace was created
			expect($location.path()).toBe('/bedspaces/' + sampleBedspaceResponse._id);
		}));

		it('$scope.update() should update a valid Bedspace', inject(function(Bedspaces) {
			// Define a sample Bedspace put data
			var sampleBedspacePutData = new Bedspaces({
				_id: '525cf20451979dea2c000001',
				name: 'New Bedspace'
			});

			// Mock Bedspace in scope
			scope.bedspace = sampleBedspacePutData;

			// Set PUT response
			$httpBackend.expectPUT(/bedspaces\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/bedspaces/' + sampleBedspacePutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid bedspaceId and remove the Bedspace from the scope', inject(function(Bedspaces) {
			// Create new Bedspace object
			var sampleBedspace = new Bedspaces({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new Bedspaces array and include the Bedspace
			scope.bedspaces = [sampleBedspace];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/bedspaces\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleBedspace);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.bedspaces.length).toBe(0);
		}));
	});
}());