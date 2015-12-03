// adding song from add song view
app.controller("addNewSong", 
	["$scope", "song_data", function($scope, getSongData) {

	$scope.newSong = {
		"album": "",
		"artist": "",
		"title": ""
	};

	$scope.addSong = function() {
		console.log("scope new song", $scope.newSong);
		getSongData.addNewSong($scope.newSong);
	};
}]);
