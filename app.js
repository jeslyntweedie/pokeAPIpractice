angular.module("pokeApp", ['ui.router'])
  .config(function($urlRouterProvider, $stateProvider){

	$stateProvider
		.state("home", {
			url:"/",
			template: "Home"
		}).state("allPokemon", {
			url:"/allPokemon",
			templateUrl: "./allPokemon.html"
		}).state("onePokemon", {
			url:"/onePokemon", 
			templateUrl: "./onePokemon.html"
		});

    $urlRouterProvider.otherwise("/");

});