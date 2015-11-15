define(function(require) {
	var $ = require("jquery");
	var firebase = require("firebase");
	var makearraymodule = require("make-array");
	var getUnique = require("getUnique");
	var loadsongs = require("loadsongs");


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
		loadsongs.insertSongstoDOM(songArray);
	});

  	return {
	 	getLoadedData: function() {
	 		console.log("get song data--", songArray);
	 		return songArray;
	 	}
	};
});
