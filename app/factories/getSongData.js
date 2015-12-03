app.factory("song_data", ["$q", "$http", function($q, $http) {
	
	function loadSongs1 () {
		return $q(function(resolve, reject) {
			$http.get('../../songs.json')
			.success(
				function(objectFromJSONFile) {
					console.log("objectFromJSONFile", objectFromJSONFile);
					resolve(objectFromJSONFile.songs);
				}, function(error) {
					reject(error);
				}
			);
		});
	}

	function loadSongs2 () {
		return $q(function(resolve, reject) {
			$http.get('../../more-songs.json')
			.success(
				function(objectFromJSONFile) {
					resolve(objectFromJSONFile.songs);
				}, function(error) {
					reject(error);
				}
			);
		});
	}

	var song_list;

	var songsData1;
	var songPromise1 = loadSongs1();
	// songPromise1.then(
	// 	function(data) {
	// 		song_list = data.songs;
	// 		resolve(data.songs)
	// 	},
	// 	function(error) {
	// 		console.log("error");
	// 		reject(error);
	// 	}
	// );

	var songsData2;
	var songPromise2 = loadSongs2();

	return {
		getSongs1: function() {
			return songPromise1;
		}
		// getSongs2: function() {
		// 	return songPromise2;
		// },
		// getSong: function() {
		// 	console.log("trying to get single song");
		// },
		// addSong: function() {

		// }
	}
}]);