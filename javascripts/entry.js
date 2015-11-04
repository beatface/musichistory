requirejs.config({
	baseUrl : "./javascripts",
	paths : {
		"jquery" : "../lib/bower_components/jquery/dist/jquery.min"
	}
});

require(
	["app-script", "populate-songs", "get-more-songs"],
	function(appscript, populatesongs, getmoresongs) {
		
	}
);