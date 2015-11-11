define(["jquery", "populate-songs", "lodash"], function ($, populatesongs, _) {
		// console.log("load-songs is working!");
		// sidebar elements for filter
		
		var albumSelect = $("#album-select").val();
		var filterButton = $("#filterButton");
		var clearButton = $("#clearButton");


		return {
			filterByArtist: function(songData) {
				// create object and array to hold filtered songs
				var filteredArray = [];
				// clear out #song-container
				$("#song-container").html("");
				// target selected value
				var artistSelect = $("#artist-select").val();
				// target main object from ajax call
				var songObjs = songData.songs;
				// target each individual song object
				for (var songkey in songObjs) {
					// console.log("songkey", songkey);
			        var thissong = songObjs[songkey];
			        // console.log("song object", thissong);
					if (thissong.artist === artistSelect) {
						// console.log("you found a match!", thissong);
						filteredArray.push(thissong);
					}
				}
				// add array to list object
				var filteredList = { "songs" : filteredArray };
				// push to DOM
				require(["hbs!../templates/songs"], function(songTemplate) {
					$("#song-container").append(songTemplate(filteredList));
				});
			},
			filterByAlbum: function(songData) {
				var filteredArray = [];
				$("#song-container").html("");
				var albumSelect = $("#album-select").val();
				var songObjs = songData.songs;
				for (var songkey in songObjs) {
					// console.log("songkey", songkey);
			        var thissong = songObjs[songkey];
			        // console.log("song object", thissong);
					if (thissong.album === albumSelect) {
						// console.log("you found a match!", thissong);
						filteredArray.push(thissong);
					}
				}
				// add array to list object
				var filteredList = { "songs" : filteredArray };
				// push to DOM
				require(["hbs!../templates/songs"], function(songTemplate) {
					$("#song-container").append(songTemplate(filteredList));
				});
			},
			filterByBoth: function(songData) {
				var filteredArray = [];
				$("#song-container").html("");
				var albumSelect = $("#album-select").val();
				var artistSelect = $("#artist-select").val();
				// target main object from ajax call
				var songObjs = songData.songs;
				// target each individual song object
				for (var songkey in songObjs) {
					// console.log("songkey", songkey);
			        var thissong = songObjs[songkey];
			        // console.log("song object", thissong);
					if (thissong.album === albumSelect && thissong.artist === artistSelect) {
						// console.log("you found a match!", thissong);
						filteredArray.push(thissong);
					}
				}
				// add array to list object
				var filteredList = { "songs" : filteredArray };
				// push to DOM
				require(["hbs!../templates/songs"], function(songTemplate) {
					$("#song-container").append(songTemplate(filteredList));
				});
			}
		};
});