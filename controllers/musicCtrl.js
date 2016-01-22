angular
	.module('mediaApp')
	.controller('musicCtrl', function(mediaLists, colorHelper) {
		
		var vm = this;
		vm.colorHelper = colorHelper;
		
		mediaLists
			.retrieveMedia()
			.then(function(response) {
				vm.albums = response.data.albums;
			});
	});
