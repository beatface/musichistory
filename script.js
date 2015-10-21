var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs.unshift("Short People by Randy Newman on the album Little Criminals");
songs.push("Sir Duke by Stevie Wonder on the album Songs in the Key of Life");
console.log(songs);

var targetHTML = document.getElementById("song-container");
var outputSongs = "";
var artistSelect = document.getElementById("artist-select");
var outputArtist = "";
var albumSelect = document.getElementById("album-select");
var outputAlbum = "";

//call function to load initial list on page load
createSongList();

function createSongList() {
	outputArtist = "";
	outputAlbum = "";
	outputSongs = "";
	for (var i = 0; i < songs.length; i++) {
		var currentSong = songs[i];
		currentSong = currentSong.replace(">", "");
		currentSong = currentSong.replace("by", "-");
		currentSong = currentSong.replace("*", "");
		currentSong = currentSong.replace("@", "");
		currentSong = currentSong.replace("(", "");
		currentSong = currentSong.replace("!", "");
		currentSong = currentSong.replace("on the album", "-");

		//Find dashes between song info
		var dashIndex = currentSong.indexOf("-");
		console.log(dashIndex);

		var lastDashIndex = currentSong.lastIndexOf("-");
		console.log(lastDashIndex);

		//Separate songs, artists and albums from each other
		var songName = currentSong.slice(0, dashIndex);
		console.log(songName);

		var artistName = currentSong.slice(dashIndex + 2, lastDashIndex);
		console.log(artistName);

		var albumName = currentSong.slice(lastDashIndex + 2, songs[i].length);
		console.log(albumName);

		//send artists to artist-select box
		outputArtist += "<option>";
		outputArtist += artistName;
		outputArtist += "</option>";

		//send albums to album-select box
		outputAlbum += "<option>";
		outputAlbum += albumName;
		outputAlbum += "</option>";

		//concat all to output
		outputSongs += "<div class='dotted-bottom'>";
		outputSongs += "<h2>" + songName + "</h2>";
		outputSongs += "<p>" + artistName + " - " + albumName + "</p>";
		outputSongs += "</div>";
	}
	//insert HTML
	artistSelect.innerHTML = outputArtist;
	albumSelect.innerHTML = outputAlbum;
	targetHTML.innerHTML = outputSongs;
	console.log(targetHTML);
}



//--- Collect values from input fields and push to songs array ---//

var submitMusicButton = document.getElementById("add-music");
var newSong = document.getElementById("inputSong");
var newArtist = document.getElementById("inputArtist");
var newAlbum = document.getElementById("inputAlbum");
var stringToAdd = "";

//on click, take values and put into string
submitMusicButton.addEventListener("click", function(event) {
	console.log("you clicked");
	stringToAdd = newSong.value;
	stringToAdd += " by ";
	stringToAdd += newArtist.value;
	stringToAdd += " on the album ";
	stringToAdd += newAlbum.value;
	console.log(stringToAdd);
	//add to array
	songs.push(stringToAdd);
	console.log(songs);
	createSongList();
	//remove from input fields
	newSong.value = "";
	newArtist.value = "";
	newAlbum.value = "";
});






//------------------------------------------------------------//
//----SHOW/HIDE DIVS on NAV BAR LINK CLICKS

var viewButton = document.getElementById("view");
var listNavButton = document.getElementById("list");
var addNavButton = document.getElementById("add");
var addSongDiv = document.getElementById("add-songs");
var listSongDiv = document.getElementById("song-list");



// viewButton.addEventListener("click");

addNavButton.addEventListener("click", function(event) {
	addSongDiv.classList.remove("hidden");
	listSongDiv.classList.add("hidden");
});

listNavButton.addEventListener("click", function(event) {
	listSongDiv.classList.remove("hidden");
	addSongDiv.classList.add("hidden");
});













