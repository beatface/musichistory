requirejs.config({
	baseUrl : "./javascripts",
	paths : {
		"jquery" : "../lib/bower_components/jquery/dist/jquery.min",
		"bootstrap" : "../lib/bower_components/bootstrap/dist/js/bootstrap.min.js"
	},
	shim: {
		"bootstrap": ["jquery"]
	}
});

require(
	["bootstrap", "app-script", "submit-input-songs"],
	function(bootstrap, appscript, submitinputsongs) {
		console.log("entry yes");
	}
);