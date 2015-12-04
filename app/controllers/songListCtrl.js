// adding songs to song-list view main div
app.controller("loadSongsToMainDiv", 
	["$scope", "$firebaseArray", function($scope, $firebaseArray) {

	var ref = new Firebase("https://musichistoryemma.firebaseio.com/songs");

	$scope.$parent.songs = $firebaseArray(ref);

	$scope.deleteSong = function(song) {
		$scope.$parent.songs.$remove(song);
	};

	// $scope.showMore = function() {
	// 		$scope.$parent.songs = getSongData.getAllSongs();
	// 		// console.log("$scope.songs",$scope.songs);
	// 	};	

}]);