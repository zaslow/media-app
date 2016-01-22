angular
	.module('mediaApp')
	.controller('filmCtrl', function(mediaLists, colorHelper) {
		
		var vm = this;
		vm.colorHelper = colorHelper;
		
		mediaLists
			.retrieveMedia()
			.then(function(response) {
				vm.films = response.data.films;
			});
	});
