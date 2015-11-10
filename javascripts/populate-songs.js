define(["jquery"], function($) {
	console.log("populate-songs");
  return {
    loadSongData: function(callback) {
      $.ajax({
      	url: "https://musichistoryemma.firebaseio.com/.json"
      	}).done(callback);
 		}
	};
});
