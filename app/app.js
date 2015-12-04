var app = angular.module("MusicHistoryApp", ["firebase", "ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
	$routeProvider
	.when('/songs-list', {
		templateUrl: 'app/partials/song-list.html',
		controller: 'songListCtrl'
	})
	.when('/add-song', {
		templateUrl: 'app/partials/add-view.html',
		controller: 'addNewSongCtrl'
	})
	.otherwise('/songs-list');

}]);