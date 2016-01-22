angular
	.module('mediaApp')
	.service('mediaLists', function($http) {
		
		var vm = this;
		
		vm.retrieveMedia = function() {
			return $http.get('media.json');
		};
		
		return vm;
	});