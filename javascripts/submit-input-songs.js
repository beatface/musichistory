define(["jquery"], function($) {
	// console.log("submit input songs is working!");
	//inputs, etc for adding new song data
	var submitMusicButton = $("#add-music");
	var newSong = $("#inputSong");
	var newArtist = $("#inputArtist");
	var newAlbum = $("#inputAlbum");

	submitMusicButton.click(function(event) {
		// console.log("you clicked");
		var newSongsObject = { 
			"songs" : [ 
				{
					"title" : newSong.val(),
					"artist" : newArtist.val(),
					"album" : newAlbum.val()
				} 
			]
		};
		//hbs template load with requirejs for SONG-CONTAINER
		require(["hbs!../templates/songs"], function(songTemplate) {
			$("#song-container").append(songTemplate(newSongsObject));
		});

		//adding artists to select boxes
		require(["hbs!../templates/artistselect"], function(songTemplate) {
			$("#artist-select").append(songTemplate(newSongsObject));
		});
		
		//adding albums to select boxes
		require(["hbs!../templates/albumselect"], function(songTemplate) {
			$("#album-select").append(songTemplate(newSongsObject));
		});


		//resetting fields to be empty
		newSong.val("");
		newArtist.val("");
		newAlbum.val("");
	});
});