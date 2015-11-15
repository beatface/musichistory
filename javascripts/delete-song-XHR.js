define(function(require) {
	var $ = require("jquery");
	var Q = require("q");

	var deferred = Q.defer();

	return {
		deleteData: function(songtodelete) {
			$.ajax({
		      	url: songtodelete,
		      	method: "DELETE"
		    }).done(function(data){ 
		      	console.log("Delete was successful"); 
				deferred.resolve(data);
		    })
			.fail(function(error) {
				deferred.reject(error);
			});
			return deferred.promise;
		}
	};
});