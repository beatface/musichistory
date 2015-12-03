var app = angular.module("loadSongs", ["ngRoute"]);


app.config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider
		.when('/song-list', { 
			templateUrl: 'app/partials/song-list.html',
			controller: 'loadSongsToMainDiv'
		})
		.when('/add-song', {
			templateUrl: 'app/partials/add-song.html',
			controller: 'addNewSong'
		})
		.otherwise('/song-list');
}]);
