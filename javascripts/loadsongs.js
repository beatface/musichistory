define(["jquery", "getUnique", "make-array"], function ($, getUnique, makearraymodule) {
		// console.log("load-songs is working!");

		return {
			insertSongstoDOM: function(songData) {
				//hbs template load with requirejs for SONG-CONTAINER
				console.log("song data", songData);
				require(["hbs!../templates/songs"], function(songTemplate) {
					$("#song-container").html(songTemplate(songData));
				});

				var uniqueArtists = getUnique.getUniqueArtists(songData);
				console.log("uniqueArtists", uniqueArtists);
				//adding artists to select boxes
				require(["hbs!../templates/artistselect"], function(songTemplate) {
					$("#artist-select").html(songTemplate(uniqueArtists));
				});
				
				var uniqueAlbums = getUnique.getUniqueAlbums(songData);
				//adding albums to select boxes
				require(["hbs!../templates/albumselect"], function(songTemplate) {
					$("#album-select").html(songTemplate(uniqueAlbums));
				});
			}
		};
});
