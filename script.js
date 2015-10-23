$(document).ready(function () { 

	var targetHTML = $("#song-container");
	var outputSongs = "";
	var artistSelect = $("#artist-select");
	var outputArtist = "";
	var albumSelect = $("#album-select");
	var outputAlbum = "";

	function loadSongData(songData) {
		outputArtist = "<option>-- Select Artist -- </option>";
		outputAlbum = "<option>-- Select Album -- </option>";
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
			outputSongs += "<div class='dotted-bottom'>";
			outputSongs += "<h2>" + songName + "</h2>";
			outputSongs += "<p>" + artistName + " - " + albumName + "</p>";
			outputSongs += "<button class='delete-song'>Delete</button>"
			outputSongs += "</div>";
		}
		//insert HTML
		artistSelect.html(outputArtist);
		albumSelect.html(outputAlbum);
		targetHTML.html(outputSongs);
		console.log(targetHTML);

		// Delete single click on delete button click
		var deleteSong = $("#delete-song");

		$("body").click(function(event) {
			var thisElement = $(event.target);
			if (thisElement.hasClass("delete-song")) {
				console.log("you clicked delete");
				$(thisElement).parent().remove();
			}
		});
	};


	// AJAX to call data from JSON file
	function loadInitalSongs() {
		$.ajax({
		url: "songs.json"
		}).done(loadSongData);
	};
	loadInitalSongs();


	//-------- Load more songs ----------//
	var moreSongsButton = $("#more-songs");

	moreSongsButton.click(function (event) {
		outputSongs = "";
		loadInitalSongs();
		$.ajax({
		url: "more-songs.json"
		}).done(loadSongData)
	});
	

	


	//-----------------------------------------------------------------//
	//--- Collect values from input fields and push to songs array ---//

	var submitMusicButton = $("#add-music");
	var newSong = $("#inputSong");
	var newArtist = $("#inputArtist");
	var newAlbum = $("#inputAlbum");
	var stringToAdd = "";

	//on click, take values and put into string
	submitMusicButton.click(function(event) {
		stringToAdd = newSong.val();
		stringToAdd += " by ";
		stringToAdd += newArtist.val();
		stringToAdd += " on the album ";
		stringToAdd += newAlbum.val();
		console.log(stringToAdd);
		//add to array
		// songs.push(stringToAdd);
		// console.log(songs);
		//();
		//remove from input fields
		newSong.val("");
		newArtist.val("");
		newAlbum.val("");
	});

	//------------------------------------------------------------//
	//----SHOW/HIDE DIVS on NAV BAR LINK CLICKS----//

	var viewButton = $("#view");
	var listNavButton = $("#list");
	var addNavButton = $("#add");
	var addSongDiv = $("#add-songs");
	var listSongDiv = $("#song-list");

	addNavButton.click(function(event) {
		addSongDiv.show();
		listSongDiv.hide();
	});
	listNavButton.click(function(event) {
		listSongDiv.show();
		addSongDiv.hide();
	});


});










