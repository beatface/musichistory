// adding songs to select boxes
app.controller("loadSongsToSelect", 
	["$http", "$scope", "song_data", function($http, $scope, getSongData) {


	getSongData.getSongs1()
	.then(function(songs1) {
		console.log("songs1 success");
		$scope.songs = songs1;
		// getSongs2.then(function(songs2) {
		// 	console.log("songs2", songs2);
		// 	$scope.songs = $scope.songs1.concat(songs2);
		// }, function(error) {
		// 	console.log("getsongs2 error", error);
		// });
	}, function(error) {
		console.log("getsongs1 error", error);
	});
}]);
