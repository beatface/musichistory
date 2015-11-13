define(["lodash", "make-array"], function(_, makearraymodule) {

	return  {
		getUniqueArtists: function(songData) {
			var uniqueArtists = _.chain(songData)
								 .uniq("artist")
								 .pluck("artist")
								 .value();
			console.log("uniqueArtists", uniqueArtists);
			return uniqueArtists;
		},
		getUniqueAlbums: function(songData) {
			var uniqueAlbums = _.chain(songData)
								.uniq("album")
								.pluck("album")
								.value();
			return uniqueAlbums;
		}
	};
});



