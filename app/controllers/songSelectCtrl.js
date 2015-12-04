// adding songs to select boxes
app.controller("songSelectCtrl", 
	["$scope", "$firebaseArray", function($scope, $firebaseArray) {
		console.log("got here");
    var ref = new Firebase("https://musichistoryemma.firebaseio.com/songs");

    $scope.$parent.songs = $firebaseArray(ref);

}]);
