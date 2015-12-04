var app = angular.module("loadSongs", ["firebase", "ngRoute"]);


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
		.when('/song-detail/:songId', {
			templateUrl: 'app/partials/add-song.html',
			controller: 'addNewSong'
		})
		.otherwise('/song-list');
}]);
