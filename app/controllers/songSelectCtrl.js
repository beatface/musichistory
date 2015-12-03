// adding songs to select boxes
app.controller("loadSongsToSelect", 
	["$http", "$scope", "song_data", function($http, $scope, getSongData) {


	getSongData.loadSongs().then(
        function () {
          $scope.songs = getSongData.getSongs1();
          console.log($scope.songs)
        },
        function (error) {
          console.log(error);
        });

}]);
