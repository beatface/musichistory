define(function(require) {
		var $ = require("jquery");
		var firebase = "firebase";
		var populatesongs = require("populate-songs");
		var loadsongs = require("loadsongs");
		var filtersongs = require("filter-songs");
		var makearraymodule = require("make-array");
		var getUnique = require("getUnique");
		var deletesongXHR = require("delete-song-XHR");


		console.log("app script start");
		//buttons and divs for changing view
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


		// Delete single song item on delete button click
		$(document).on("click", ".delete-button", function(event) {
			console.log("you clicked this -- ", this);
			var key = $(this).parent().attr("id");
			var deletestring = "https://musichistoryemma.firebaseio.com/songs/" + key + "/.json";
			console.log("the key name is ", key);

			deletesongXHR.deleteData(deletestring);
			
		});
		
		//------------------------------------------------------------//
		//----Handlers, functions for filter and clear buttons----//

		$(filterButton).click(function(event){
			var songDataObj = populatesongs.getLoadedData();
			//if nothing is selected
			if (artistSelect.val() === "---select artist---" && albumSelect.val() === "---select album---") {
				//do nothing
				console.log("you need to select something!");
			//if an artist is selected	
			} else if (artistSelect.val() !== "---select artist---"  && albumSelect.val() === "---select album---") {
				// filter by artist
				console.log("you selected an artist");
				filtersongs.filterByArtist(songDataObj);
			//if an album is selected
			} else if (artistSelect.val() === "---select artist---"  && albumSelect.val() !== "---select album---") {
				//filter by album
				console.log("you selected an album");
				filtersongs.filterByAlbum(songDataObj);
			//else if both selected
			} else {
				//filter by both
				console.log("you selected both");
				filtersongs.filterByBoth(songDataObj);
			}
		});

		$(clearButton).click(function(event){
			$("#song-container").html("");
			loadsongs.insertSongstoDOM(populatesongs.getLoadedData);
			
		});

		//------------------------------------------------------------//
		//----SHOW/HIDE DIVS on NAV BAR LINK CLICKS----//

		addNavButton.click(function(event) {
			addSongDiv.show();
			listSongDiv.hide();
		});
		listNavButton.click(function(event) {
			listSongDiv.show();
			addSongDiv.hide();
		});


});

