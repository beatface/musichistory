$(document).ready(function () { 

	var songs = [];

	songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
	songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
	songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
	songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
	songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
	songs.unshift("Short People by Randy Newman on the album Little Criminals");
	songs.push("Sir Duke by Stevie Wonder on the album Songs in the Key of Life");
	console.log(songs);

	var targetHTML = $("#song-container");
	var outputSongs = "";
	var artistSelect = $("#artist-select");
	var outputArtist = "";
	var albumSelect = $("#album-select");
	var outputAlbum = "";

	//call function to load initial list on page load
	createSongList();

	function createSongList() {
		outputArtist = "<option>-- Select Artist -- </option>";
		outputAlbum = "<option>-- Select Album -- </option>";
		outputSongs = "";
		for (var i = 0; i < songs.length; i++) {
			var currentSong = songs[i];
			currentSong = currentSong.replace(">", "");
			currentSong = currentSong.replace("by", "-");
			currentSong = currentSong.replace("*", "");
			currentSong = currentSong.replace("@", "");
			currentSong = currentSong.replace("(", "");
			currentSong = currentSong.replace("!", "");
			currentSong = currentSong.replace("on the album", "-");

			//Find dashes between song info
			var dashIndex = currentSong.indexOf("-");
			console.log(dashIndex);

			var lastDashIndex = currentSong.lastIndexOf("-");
			console.log(lastDashIndex);

			//Separate songs, artists and albums from each other
			var songName = currentSong.slice(0, dashIndex);
			console.log(songName);

			var artistName = currentSong.slice(dashIndex + 2, lastDashIndex);
			console.log(artistName);

			var albumName = currentSong.slice(lastDashIndex + 2, songs[i].length);
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
			outputSongs += "</div>";
		}
		//insert HTML
		artistSelect.html(outputArtist);
		albumSelect.html(outputAlbum);
		targetHTML.html(outputSongs);
		console.log(targetHTML);
	}



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
		songs.push(stringToAdd);
		console.log(songs);
		createSongList();
		//remove from input fields
		newSong.val("");
		newArtist.val("");
		newAlbum.val("");
	});






	//------------------------------------------------------------//
	//----SHOW/HIDE DIVS on NAV BAR LINK CLICKS

	var viewButton = $("#view");
	var listNavButton = $("#list");
	var addNavButton = $("#add");
	var addSongDiv = $("#add-songs");
	var listSongDiv = $("#song-list");



	// viewButton.addEventListener("click");

	addNavButton.click(function(event) {
		addSongDiv.show();
		listSongDiv.hide();
	});

	listNavButton.click(function(event) {
		listSongDiv.show();
		addSongDiv.hide();
	});


});










