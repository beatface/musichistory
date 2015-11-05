define(["jquery"], function($) {
	console.log("submit input songs is working!");
	//inputs, etc for adding new song data
	var submitMusicButton = $("#add-music");
	var newSong = $("#inputSong");
	var newArtist = $("#inputArtist");
	var newAlbum = $("#inputAlbum");
	var stringToAdd = "";
	var newSongsObject = { "songs" : [] };

	submitMusicButton.click(function(event) {
		console.log("you clicked");
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
		stringToAdd += "<p class='delete-song'><button class='green-button thin-button-padding quicksand-font'>Delete</button></p>";
		stringToAdd += "<p>" + songsArray[songsArray.length - 1].artist + " - " + songsArray[songsArray.length - 1].album + "</p>";
		console.log("string to add", stringToAdd);

		$("#song-container").append(stringToAdd);

		// remove from input fields
		newSong.val("");
		newArtist.val("");
		newAlbum.val("");
	});
});