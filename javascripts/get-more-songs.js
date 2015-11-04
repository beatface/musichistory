define(["jquery"], function($) {
  return {
    loadMoreSongs: function (event) {
		outputSongs = "";
		outputArtist = "";
		outputAlbum = "";
		$.ajax({
		url: "javascripts/more-songs.json"
		}).done(event);
		}
	};
});

