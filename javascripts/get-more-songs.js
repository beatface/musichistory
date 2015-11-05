define(["jquery", "loadsongs"], function($, loadsongs) {
	console.log("get more songs");
  return {
    loadSongData: function() {
		$.ajax({
		url: "javascripts/more-songs.json"
		}).done(loadsongs.insertSongstoDOM);
		}
	};
});
