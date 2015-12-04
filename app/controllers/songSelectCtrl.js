// adding songs to select boxes
app.controller("loadSongsToSelect", 
	["$scope", "$firebaseArray", function($scope, $firebaseArray) {

    var ref = new Firebase("https://musichistoryemma.firebaseio.com/songs");

    $scope.$parent.songs = $firebaseArray(ref);

}]);
