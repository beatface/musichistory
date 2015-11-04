define(["jquery"], function($) {
  return {
    loadInitalSongs: function(event) {
    	outputArtist = "<option>-- Select Artist -- </option>";
		outputAlbum = "<option>-- Select Album -- </option>";
      $.ajax({
      	url: "javascripts/songs.json"
      	}).done(event);
 		}
	};
});


	// function loadInitalSongs() {
	// 	outputArtist = "<option>-- Select Artist -- </option>";
	// 	outputAlbum = "<option>-- Select Album -- </option>";
	// 	$.ajax({
	// 	url: "songs.json"
	// 	}).done(loadSongData);
	// }





// define(["jquery"], function($) {
//   return {
//     getMeSomeData: function(callbackFunctionReference) {
//       $.ajax({...}).done(function(jsonDataSentByjQuery) {
//         callbackFunctionReference(jsonDataSentByjQuery);
//       }
//     }
//   }
// });

