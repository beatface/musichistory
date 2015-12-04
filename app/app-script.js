define(["jquery", "populate-songs", "loadSongs"], 
	function($, populatesongs, loadsongs) {

	console.log("app script start");
	//buttons and divs for changing view
	var viewButton = $("#view");
	var listNavButton = $("#list");
	var addNavButton = $("#add");
	var addSongDiv = $("#add-songs");
	var listSongDiv = $("#song-container");
	var filterButton = $("#filterButton");
	var clearButton = $("#clearButton");
	//button to list more songs
	var moreSongsButton = $("#more-songs");

		addSongDiv.hide();

		//toggle function to show/hide sidebar
	    $("#menu-toggle").click(function(e) {
	    	console.log("you clicked");
	        e.preventDefault();
	        $("#wrapper").toggleClass("toggled");
	    });

	    //click functions for "active" styling on nav items
	    $("#add").click(function(e) {
	    	$("#list").toggleClass("active");
	    	$("#add").toggleClass("active");
	    });

	    $("#list").click(function(e) {
	    	$("#add").toggleClass("active");
	    	$("#list").toggleClass("active");
	    });

		// AJAX to call song data from JSON file
		populatesongs.loadSongData(loadsongs.insertSongstoDOM);
		//-------- Load more songs ----------//

		
		// Delete single song item on delete button click
		$("body").click(function(event) {
			console.log("you clicked!");
			var thisElement = $(event.target);
			var thisParent = thisElement.parent();
			if (thisParent.hasClass("delete-song")) {
				console.log("you clicked delete");
				$(thisParent).parent().remove();
			}
		});
		
		//------------------------------------------------------------//
		//----Handlers for filter and clear buttons----//



		//------------------------------------------------------------//
		//----SHOW/HIDE DIVS on NAV BAR LINK CLICKS----//

		addNavButton.click(function(event) {
			addSongDiv.show();
			listSongDiv.hide();
			moreSongsButton.hide();
		});
		listNavButton.click(function(event) {
			listSongDiv.show();
			addSongDiv.hide();
			moreSongsButton.show();
		});
});