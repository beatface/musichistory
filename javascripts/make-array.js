define(["jquery"], function($) {
	
	return {
		makeArray: function(songData) {
			var newArray = [];

			for (var key in songData.songs) {
				var augmentedSong = songData.songs[key];
				augmentedSong.key = key;
				newArray[newArray.length] = augmentedSong;
			}

			return newArray;

		}
	};
});