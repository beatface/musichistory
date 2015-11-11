define(["jquery"], function($) {
	
	return {
		makeArray: function(songData) {
			var dataArray = $.map(songData.songs, function(el) { return el; });
			return dataArray;
		}
	};
});