// adding songs to song-list view main div
app.controller("loadSongsToMainDiv", 
	["$http", "$scope", "song_data", function($http, $scope, getSongData) {

	getSongData.loadSongs()
	.then(function () {
          $scope.songs = getSongData.getSongs1();
          console.log($scope.songs);
        },
        function (error) {
          console.log(error);
        });

	$scope.showMore = function() {
			$scope.songs = getSongData.getAllSongs();
		});
	};

}]);