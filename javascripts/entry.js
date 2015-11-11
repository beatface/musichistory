requirejs.config({
	baseUrl : "./javascripts",
	paths : {
		"jquery" : "../lib/bower_components/jquery/dist/jquery.min",
		"hbs" : "../lib/bower_components/require-handlebars-plugin/hbs",
		"hbs/handlebars" : "../lib/bower_components/require-handlebars-plugin/hbs/handlebars",
		"bootstrap" : "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
		"lodash" : "../lib/bower_components/lodash/lodash.min"
	},
	shim: {
		"bootstrap": ["jquery"]
	}
});

require(
	["bootstrap", "hbs", "app-script", "submit-input-songs"],
	function(bootstrap, Handlebars, appscript, submitinputsongs) {
		// console.log("entry yes");
	}
);