define(["jquery", "populate-songs", "loadSongs", "filter-songs"], 
	function($, populatesongs, loadsongs, filtersongs) {

		console.log("app script start");
		//buttons and divs for changing view
		var viewButton = $("#view");
		var listNavButton = $("#list");
		var addNavButton = $("#add");
		var addSongDiv = $("#add-songs");
		var listSongDiv = $("#song-container");
		//sidebar elements for filter
		var artistSelect = $("#artist-select");
		var albumSelect = $("#album-select");
		var filterButton = $("#filterButton");
		var clearButton = $("#clearButton");

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
		//----Handlers, functions for filter and clear buttons----//



		$(filterButton).click(function(event){
			// console.log("artist selected", artistSelect.val());
			//if nothing is selected
			if (artistSelect.val() === "---select artist---" && albumSelect.val() === "---select album---") {
				//do nothing
				console.log("you need to select something!");
			//if an artist is selected	
			} else if (artistSelect.val() !== "---select artist---"  && albumSelect.val() === "---select album---") {
				// filter by artist
				console.log("you selected an artist");
				populatesongs.loadSongData(filtersongs.filterByArtist);
			//if an album is selected
			} else if (artistSelect.val() === "---select artist---"  && albumSelect.val() !== "---select album---") {
				//filter by album
				console.log("you selected an album");
				populatesongs.loadSongData(filtersongs.filterByAlbum);
			//else if both selected
			} else {
				//filter by both
				console.log("you selected both");
				populatesongs.loadSongData(filtersongs.filterByBoth);
			}
		});

		$(clearButton).click(function(event){
			$("#song-container").html("");
			$(artistSelect).html("<option>---select artist---</option>");
			$(albumSelect).html("<option>---select album---</option>");
			populatesongs.loadSongData(loadsongs.insertSongstoDOM);

		});

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