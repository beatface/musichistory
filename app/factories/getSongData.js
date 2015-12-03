app.factory("song_data", ["$q", "$http", function($q, $http) {
	
	function loadSongs1 () {
		return $q(function(resolve, reject) {
			$http.get('./songs.json')
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
			$http.get('more-songs.json')
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
	var all_song_list;
	// first json promise
	var songsData1;
	var songPromise1 = loadSongs1();

	songPromise1.then(
		function(data) {
			song_list = data;
		},
		function(error) {
			console.log("error", error);
		}
	);

	var songsData2;
	var songPromise2 = loadSongs2();
	// second json promise
	songPromise2.then(
		function(data) {
			all_song_list = song_list.concat(data);
		},
		function(error) {
			console.log("error", error);
		}
	);

	return {
		loadSongs: function() {
			return songPromise1;
		},
		getSongs1: function() {
			return song_list;
		},
		getSongs2: function() {
			return songPromise2;
		},
		getAllSongs: function() {
			return all_song_list;
		},
		addNewSong: function(newSong) {
			song_list.push(newSong);
      		return song_list;
		}
	}
}]);