var app = angular.module("loadSongs", ["ngRoute"]);


app.config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider
		.when('/song-list', { 
			templateUrl: '/#/partials/song-list.html',
			controller: 'loadSongsToMainDiv'
		})
		.when('/song-add', {
			templateUrl: '/#/partials/add-song.html',
			// controller: ''
		})
		.otherwise('/song-list');
}]);
