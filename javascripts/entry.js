requirejs.config({
	baseUrl : "./javascripts",
	paths : {
		"jquery" : "../lib/bower_components/jquery/dist/jquery.min",
		"hbs" : "../lib/bower_components/require-handlebars-plugin/hbs",
		"hbs/handlebars" : "../lib/bower_components/require-handlebars-plugin/hbs/handlebars",
		"bootstrap" : "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
		"lodash" : "../lib/bower_components/lodash/lodash.min",
		"firebase" : "../lib/bower_components/firebase/firebase",
		'q': '../lib/bower_components/q/q'
	},
	shim: {
		"bootstrap": ["jquery"],
		"firebase" : {
			exports: "Firebase"
		}
	}
});

require(
	["bootstrap", "hbs", "populate-songs", "app-script", "submit-input-songs"],
	function(bootstrap, Handlebars, populatesongs, appscript, submitinputsongs) {
		// console.log("entry working!s");
	}
);