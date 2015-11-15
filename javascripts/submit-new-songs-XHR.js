define(function(require) {
	var $ = require("jquery");
	var Q = require("q");

	var deferred = Q.defer();

	return {
		postData: function(newSongObject) {
			$.ajax({
				url: "https://musichistoryemma.firebaseio.com/songs.json",
				method: "POST",
				data: JSON.stringify(newSongObject)
			})
			.done(function(data) {
				console.log("it's done");
				deferred.resolve(data);
			})
			.fail(function(error) {
				deferred.reject(error);
			});
			return deferred.promise;
		}
	};
});