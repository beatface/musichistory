define(["jquery"], function ($) {
		// console.log("load-songs is working!");

		return {
			insertSongstoDOM: function(songData) {
				//hbs template load with requirejs for SONG-CONTAINER
				console.log(songData);
				require(["hbs!../templates/songs"], function(songTemplate) {
					$("#song-container").append(songTemplate(songData));
				});

				//adding artists to select boxes
				require(["hbs!../templates/artistselect"], function(songTemplate) {
					$("#artist-select").append(songTemplate(songData));
				});
				
				//adding albums to select boxes
				require(["hbs!../templates/albumselect"], function(songTemplate) {
					$("#album-select").append(songTemplate(songData));
				});
			}
		};
});