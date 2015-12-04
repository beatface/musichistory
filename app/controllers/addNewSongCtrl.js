// adding song from add song view
app.controller("addNewSong", 
	["$scope", "$firebaseArray", function($scope, $firebaseArray) {

	$scope.newSong = {
		"album": "",
		"artist": "",
		"title": "",
		"genre": ""
	};

	var ref = new Firebase("https://musichistoryemma.firebaseio.com/songs");
	$scope.$parent.songs = $firebaseArray(ref);

	$scope.addSong = function() {
		$scope.$parent.songs.$add($scope.newSong);
	};
}]);
