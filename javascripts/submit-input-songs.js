define(["jquery", "populate-songs", "loadsongs"], function($, populatesongs, loadsongs) {
	// console.log("submit input songs is working!");
	//inputs, etc for adding new song data
	var submitMusicButton = $("#add-music");
	var newSong = $("#inputSong");
	var newArtist = $("#inputArtist");
	var newAlbum = $("#inputAlbum");

	submitMusicButton.click(function(event) {

		// console.log("you clicked");
		var newSongObject = { 
			"title" : newSong.val(),
			"artist" : newArtist.val(),
			"album" : newAlbum.val()
		};

		$.ajax({
			url: "https://musichistoryemma.firebaseio.com/songs.json",
			method: "POST",
			data: JSON.stringify(newSongObject)
		}).done(function() {
			populatesongs.loadSongData(loadsongs.insertSongstoDOM);
			//resetting fields to be empty
			newSong.val("");
			newArtist.val("");
			newAlbum.val("");
		});

	});
});