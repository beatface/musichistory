define(["jquery", "q", "populate-songs", "loadsongs", "submit-new-songs-XHR"], 
function($, Q, populatesongs, loadsongs, submitXHR) {
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

		submitXHR.postData(newSongObject)
			.then(function() {
				//resetting fields to be empty
				newSong.val("");
				newArtist.val("");
				newAlbum.val("");
			})
			.fail(function(error) {
				console.log("Oh no, an error!", error);
			});

	});
});