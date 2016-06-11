angular.module('VideoGames.services', [])

.service('fbRef', function(){
	return new Firebase(fbURL);
})

.service('Games', function($firebase, fbRef, gameListValue){
	var games = this;
	this.fetch = function(){
		
	};
});