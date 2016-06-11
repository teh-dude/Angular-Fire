angular.module('VideoGames', ['VideoGames.controllers', 'VideoGames.services', 'ngRoute', 'firebase'])

.value('fbRef', 'https://project-4188714469695216961.firebaseio.com/
');

.config(function($routeProvider){
	var resolveGames = {
		games: function(Games){
			return Games.fetch();
		}
	}

	$routeProvider
		.when('/', {
			controller: 'GameListController as gameList',
			templateUrl: 'views/list.html.html',
			resolve: resolveGames
		})

		.when('/games', {
			controller: 'EditGameController as editGame',
			templateUrl: 'views/details.html',
			resolve: resolveGames
		})

		.when('/details', {
			controller: 'NewGameController as editGame',
			templateUrl: 'views/contactus.html',
			resolve: resolveGames
		})

		.otherwise({
			reditectTo: '/'
		});
});
