// adding songs to song-list view main div
app.controller("loadSongsToMainDiv", 
	["$http", "$scope", "song_data", function($http, $scope, getSongData) {

	getSongData.getSongs1().then(function(songs1) {
		console.log("songs1", songs1);
		$scope.songs = songs1;
	}, function(error) {
		console.log("getsongs1 error", error);
	});

	// getSongs2.then(function(songs2) {
	// 	console.log("songs2", songs2);
	// }, function(error) {
	// 	console.log("getsongs2 error", error);
	// });

}]);