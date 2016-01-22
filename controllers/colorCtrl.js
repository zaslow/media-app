angular
	.module('mediaApp')
	.controller('colorCtrl', function(mediaLists, colorHelper) {

		var vm = this;
		vm.colorHelper = colorHelper;
	
		mediaLists
			.retrieveMedia()
			.then(function(response) {
				vm.colors = response.data.colors;
			});
	});
