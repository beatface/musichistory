// adding songs to song-list view main div
app.controller("loadSongsToMainDiv", 
	["$scope", "song_data", function($scope, getSongData) {

	getSongData.loadSongs()
	.then(function () {
          $scope.$parent.songs = getSongData.getSongs1();
          console.log($scope.songs);
        },
        function (error) {
          console.log(error);
        });

	$scope.showMore = function() {
			$scope.$parent.songs = getSongData.getAllSongs();
			// console.log("$scope.songs",$scope.songs);
		};	

}]);