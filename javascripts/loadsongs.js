define(["jquery"], function ($) {
		console.log("load-songs is working!");
		var targetHTML = $("#song-container");
		//output elements incluing HTML and select boxes
		var outputSongs = "";
		var artistSelect = $("#artist-select");
		var outputArtist = "";
		var albumSelect = $("#album-select");
		var outputAlbum = "";
		return {
			insertSongstoDOM: function(songData) {
				for (var i = 0; i < songData.songs.length; i++) {
					var currentSong = songData.songs[i];
					// Separate songs, artists and albums from each other
					var songName = currentSong.title;
					console.log(songName);

					var artistName = currentSong.artist;
					console.log(artistName);

					var albumName = currentSong.album;
					console.log(albumName);

					//send artists to artist-select box
					outputArtist += "<option>";
					outputArtist += artistName;
					outputArtist += "</option>";

					//send albums to album-select box
					outputAlbum += "<option>";
					outputAlbum += albumName;
					outputAlbum += "</option>";

					//concat all to output
					outputSongs += "<div class='dotted-bottom song-item-div'>";
					outputSongs += "<h2>" + songName + "</h2>";
					outputSongs += "<p class='delete-song'><button class='green-button thin-button-padding quicksand-font'>Delete</button></p>";
					outputSongs += "<p>" + artistName + " - " + albumName + "</p>";
					outputSongs += "</div>";
				}
				//insert HTML
				artistSelect.append(outputArtist);
				albumSelect.append(outputAlbum);
				targetHTML.append(outputSongs);
				console.log(targetHTML);

				// Delete single song item on delete button click
				$("body").click(function(event) {
					var thisElement = $(event.target);
					var thisParent = thisElement.parent();
					if (thisParent.hasClass("delete-song")) {
						console.log("you clicked delete");
						$(thisParent).parent().remove();
					}
				});
				outputSongs = "";
				outputArtist = "";
				outputAlbum = "";
			}
		};
});