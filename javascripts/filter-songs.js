define(["jquery", "populate-songs", "lodash", "make-array"], function ($, populatesongs, _, makearraymodule) {
		// console.log("load-songs is working!");

		return {
			filterByArtist: function(songData) {
				var artistSelect = $("#artist-select").val();
				var matchingArtists = _.chain(songData)
				                      .filter((song) => song.artist === artistSelect)
				                      .value();
				// console.log("matchingArtists", matchingArtists);

				require(["hbs!../templates/songs"], function(songTemplate) {
					$("#song-container").html(songTemplate(matchingArtists));
				});
            },
            filterByAlbum: function(songData) {
				var albumSelect = $("#album-select").val();
				var matchingAlbums = _.chain(songData)
				                      .filter((song) => song.album === albumSelect)
				                      .value();
				// console.log("matchingArtists", matchingArtists);

				require(["hbs!../templates/songs"], function(songTemplate) {
					$("#song-container").html(songTemplate(matchingAlbums));
				});
            },
            filterByBoth: function(songData) {
            	var artistSelect = $("#artist-select").val();
				var albumSelect = $("#album-select").val();
				var matchingSongs = _.chain(songData)
				                      .filter((song) => song.album === albumSelect && song.artist === artistSelect)
				                      .value();
				// console.log("matchingArtists", matchingArtists);

				require(["hbs!../templates/songs"], function(songTemplate) {
					$("#song-container").html(songTemplate(matchingSongs));
				});
            }
		};
});