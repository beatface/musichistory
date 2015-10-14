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
targetHTML.innerHTML = "";

for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(">", "");
	songs[i] = songs[i].replace("by", "-");
	songs[i] = songs[i].replace("*", "");
	songs[i] = songs[i].replace("@", "");
	songs[i] = songs[i].replace("(", "");
	songs[i] = songs[i].replace("!", "");
	songs[i] = songs[i].replace("on the album", "-");
	targetHTML.innerHTML += "<p>" + songs[i] + "</p>";
}
console.log(targetHTML);

//Loop over the array
//remove words and characters that don't belong
//replace > with -





