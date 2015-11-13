define(function(require) {
	var $ = require("jquery");
	var firebase = require("firebase");
	var makearraymodule = require("make-array");
	var getUnique = require("getUnique");


	var songArray = [];

		// Create a reference to your Firebase database
	var myFirebaseRef = new Firebase("https://musichistoryemma.firebaseio.com/songs");

	// Listen for when anything changes on the "songs" key
	myFirebaseRef.on("value", function(snapshot) {
		console.log("detected change");
		// Store the entire songs key in a local variable
		var allSongsObject = snapshot.val();
		console.log("allSongsObject------", allSongsObject);
		songArray = makearraymodule.makeArray({ "songs" : allSongsObject });
		// console.log("populate songArray", songArray);

		// Bind the allSongsObject to the song list Handlebar template
		require(["hbs!../templates/songs"], function(songTemplate) {
			$("#song-container").html(songTemplate(songArray));
		});

		// Bind the unique artists to the artists template
		var uniqueArtists = getUnique.getUniqueArtists(songArray);
		console.log("uniqueArtists", uniqueArtists);
		require(["hbs!../templates/artistselect"], function(songTemplate) {
			$("#artist-select").html(songTemplate(uniqueArtists));
		});

		// Bind the unique albums to the albums template
		var uniqueAlbums = getUnique.getUniqueAlbums(songArray);
		require(["hbs!../templates/albumselect"], function(songTemplate) {
			$("#album-select").html(songTemplate(uniqueAlbums));
		});
	});

  	return {
	 	getLoadedData: function() {
	 		console.log("get song data--", songArray);
	 		return songArray;
	 	}
	};
});
