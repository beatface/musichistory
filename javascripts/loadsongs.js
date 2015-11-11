define(["jquery", "getUnique"], function ($, getUnique) {
		// console.log("load-songs is working!");

		return {
			insertSongstoDOM: function(songData) {
				//hbs template load with requirejs for SONG-CONTAINER
				console.log("song data", songData);
				require(["hbs!../templates/songs"], function(songTemplate) {
					$("#song-container").append(songTemplate(songData));
				});
				
				var dataArray = $.map(songData.songs, function(el) { return el; });
				// console.log("dataArray", dataArray);
				var uniqueArtists = getUnique.getUniqueArtists(dataArray);
				// console.log("uniqueArtists", uniqueArtists);
				//adding artists to select boxes
				require(["hbs!../templates/artistselect"], function(songTemplate) {
					$("#artist-select").append(songTemplate(uniqueArtists));
				});
				
				var uniqueAlbums = getUnique.getUniqueAlbums(dataArray);
				//adding albums to select boxes
				require(["hbs!../templates/albumselect"], function(songTemplate) {
					$("#album-select").append(songTemplate(uniqueAlbums));
				});
			}
		};
});