angular.module("pokeApp")
.controller("mainCtrl", function($scope, mainServ){

	$scope.allPokemon;//this is an array of all of your pokemon

	$scope.getAll = function() {//this is a function that calls to the service file to to an api request which is getting all of the pokemon
		mainServ.allPokemon()
		.then(function(response){
			console.log(response);
 			$scope.allPokemon = response;
    	})
	}
	$scope.getAll();


	$scope.getOne = function(url) {
		console.log(url, "fire")
 		mainServ.getOne(url)
 		.then(function(response){
 			console.log(response);
 			$scope.showOne = response;	
 		})
 	};
});

