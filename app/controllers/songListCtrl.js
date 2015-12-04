// adding songs to song-list view main div
app.controller("songListCtrl", 
	["$scope", "$firebaseArray", function($scope, $firebaseArray) {
		console.log("got to here");
	var ref = new Firebase("https://musichistoryemma.firebaseio.com/songs");

	$scope.$parent.songs = $firebaseArray(ref);
	console.log("scope", $scope.$parent.songs);
	$scope.deleteSong = function(song) {
		$scope.$parent.songs.$remove(song);
	};

	// $scope.showMore = function() {
	// 		$scope.$parent.songs = getSongData.getAllSongs();
	// 		// console.log("$scope.songs",$scope.songs);
	// 	};	

}]);