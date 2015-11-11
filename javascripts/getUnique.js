define(["lodash"], function(_) {

	return  {
		getUniqueArtists: function(songsArray) {
			console.log("songsArray--", songsArray);
			var uniqueArtists = _.chain(songsArray)
								 .uniq("artist")
								 .pluck("artist")
								 .value();
			console.log("uniqueArtists", uniqueArtists);
			return uniqueArtists;
		},
		getUniqueAlbums: function(songsArray) {
			var uniqueAlbums = _.chain(songsArray)
								.uniq("album")
								.pluck("album")
								.value();
			return uniqueAlbums;
		}
	};
});