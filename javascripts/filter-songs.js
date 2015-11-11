define(["jquery", "populate-songs", "lodash", "make-array"], function ($, populatesongs, _, makearraymodule) {
		// console.log("load-songs is working!");

		return {
			filterByArtist: function(songData) {
				var artistSelect = $("#artist-select").val();
				var dataArray = makearraymodule.makeArray(songData);
				// console.log("dataArray----", dataArray);
				var matchingArtists = _.chain(dataArray)
				                      .filter((song) => song.artist === artistSelect)
				                      .value();
				// console.log("matchingArtists", matchingArtists);

				require(["hbs!../templates/songs"], function(songTemplate) {
					$("#song-container").html(songTemplate(matchingArtists));
				});
            },
            filterByAlbum: function(songData) {
				var albumSelect = $("#album-select").val();
				var dataArray = makearraymodule.makeArray(songData);
				// console.log("dataArray----", dataArray);
				var matchingAlbums = _.chain(dataArray)
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
				var dataArray = makearraymodule.makeArray(songData);
				// console.log("dataArray----", dataArray);
				var matchingSongs = _.chain(dataArray)
				                      .filter((song) => song.album === albumSelect && song.artist === artistSelect)
				                      .value();
				// console.log("matchingArtists", matchingArtists);

				require(["hbs!../templates/songs"], function(songTemplate) {
					$("#song-container").html(songTemplate(matchingSongs));
				});
            }
		};
});