angular.module("pokeApp").service("mainServ", function($http){
		
	this.allPokemon = function() {
		return $http({
	        method: "GET",
	        url: "http://pokeapi.co/api/v2/pokemon"
        }).then(function(response){
        	return response.data.results;
       });
    },

	this.getOne = function(url) {
		return $http({
	        method: "GET",
	        url: url
        }).then(function(response){
        	console.log(response)
        	return response.data;
       });
    }


});