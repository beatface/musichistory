define(["jquery", "populate-songs", "get-more-songs"],
	function($, populatesongs, getmoresongs) {

	//output elements incluing HTML and select boxes
	var targetHTML = $("#song-container");
	var outputSongs = "";
	var artistSelect = $("#artist-select");
	var outputArtist = "";
	var albumSelect = $("#album-select");
	var outputAlbum = "";
	//buttons and divs for changing view
	var viewButton = $("#view");
	var listNavButton = $("#list");
	var addNavButton = $("#add");
	var addSongDiv = $("#add-songs");
	var listSongDiv = $("#song-list");
	//button to list more songs
	var moreSongsButton = $("#more-songs");
	//inputs, etc for adding new song data
	var submitMusicButton = $("#add-music");
	var newSong = $("#inputSong");
	var newArtist = $("#inputArtist");
	var newAlbum = $("#inputAlbum");
	var stringToAdd = "";
	var newSongsObject = { "songs" : [] };

	addSongDiv.hide();

	function loadSongData(songData) {
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

		// Delete single click on delete button click
		$("body").click(function(event) {
			var thisElement = $(event.target);
			if (thisElement.hasClass("delete-song")) {
				console.log("you clicked delete");
				$(thisElement).parent().remove();
			}
		});
	}

	// AJAX to call data from JSON file
	populatesongs.loadInitalSongs(loadSongData);

	//-------- Load more songs ----------//
	moreSongsButton.click(getmoresongs.loadMoreSongs(loadSongData));
	
	//-----------------------------------------------------------------//
	//--- Collect values from input fields and push to songs array ---//
	//on click, take values and put into string
	submitMusicButton.click(function(event) {
		var newobject = { 
			"title" : newSong.val(),
			"artist" : newArtist.val(),
			"album" : newAlbum.val()
		};
		// console.log(newobject);
		var songsArray = newSongsObject.songs;
		songsArray.push(newobject);
		// console.log(newSongsObject);
		stringToAdd = "<div class='dotted-bottom'>";
		stringToAdd += "<h2>" + songsArray[songsArray.length - 1].title + "</h2>";
		stringToAdd += "<p>" + songsArray[songsArray.length - 1].artist + " - " + songsArray[songsArray.length - 1].album + "</p>";
		console.log("string to add", stringToAdd);

		targetHTML.append(stringToAdd);

		// remove from input fields
		newSong.val("");
		newArtist.val("");
		newAlbum.val("");
	});

	//------------------------------------------------------------//
	//----SHOW/HIDE DIVS on NAV BAR LINK CLICKS----//

	addNavButton.click(function(event) {
		addSongDiv.show();
		listSongDiv.hide();
		moreSongsButton.hide();
	});
	listNavButton.click(function(event) {
		listSongDiv.show();
		addSongDiv.hide();
		moreSongsButton.show();
	});


});