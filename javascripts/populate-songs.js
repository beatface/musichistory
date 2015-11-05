define(["jquery"], function($) {
	console.log("populate-songs");
  return {
    loadSongData: function(callback) {
      $.ajax({
      	url: "javascripts/songs.json"
      	}).done(callback);
 		}
	};
});
