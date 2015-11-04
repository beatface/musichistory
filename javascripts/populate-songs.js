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
