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

for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(">", "");
	songs[i] = songs[i].replace("by", "-");
	songs[i] = songs[i].replace("*", "");
	songs[i] = songs[i].replace("@", "");
	songs[i] = songs[i].replace("(", "");
	songs[i] = songs[i].replace("!", "");
	songs[i] = songs[i].replace("on the album", "-");

	//Find dashes between song info
	var dashIndex = songs[i].indexOf("-");
	console.log(dashIndex);

	var lastDashIndex = songs[i].lastIndexOf("-");
	console.log(lastDashIndex);

	//Separate songs, artists and albums from each other
	var songName = songs[i].slice(0, dashIndex);
	console.log(songName);

	var artistName = songs[i].slice(dashIndex + 2, lastDashIndex);
	console.log(artistName);

	var albumName = songs[i].slice(lastDashIndex + 2, songs[i].length);
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
	outputSongs += "<div>";
	outputSongs += "<h2>" + songName + "</h2>";
	outputSongs += "<p>" + artistName + " - " + albumName + "</p>";
	outputSongs += "</div>";
}

//insert HTML
artistSelect.innerHTML = outputArtist;
albumSelect.innerHTML = outputAlbum;
targetHTML.innerHTML = outputSongs;
console.log(targetHTML);






