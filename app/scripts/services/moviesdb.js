'use strict';

/**
 * @ngdoc service
 * @name movieApp.MoviesDB
 * @description
 * # MoviesDB
 * Factory in the movieApp.
 */
angular.module('movieDemoApp')
  .factory('moviesdb', function ($http) {
    // Service logic
    // ...

    var films= [];

    var movies = [];

    var moviesLS = localStorage.getItem('movies');
    if (moviesLS) {
		var movies = JSON.parse(moviesLS);
    }
	else {
    	movies = [];
    }

    function stockageLocal () {
      localStorage.setItem('movies', JSON.stringify(movies));
	}





     

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },

      getFilms: function(){
        return films;
      },
   
     rechercherFilm: function(title){
        $http.get('http://amc.ig.he-arc.ch:3003/search/movie?query='+title+'&language=fr')
        .success(function(data){
         films = data.results;
        });

     },

      chargerFilms: function(){
         $http.get('http://amc.ig.he-arc.ch:3003/movie/upcoming?language=fr')
        .success(function(data){
          films = data.results;
      });
        

      },



    addFavori: function (id) {
	  	movies.push(id);
	  	stockageLocal ();
	  },

	  getFavoris: function () {
	  	return movies;
	  },

	  deleteFavori: function (id) {
        movies.splice(movies.indexOf(id), 1);
	  	stockageLocal ();
	  },

	  isId: function (id) {
        for (var i=0; i<movies.length; i++) {
          if(movies.indexOf(id) > -1) {
            return true;
          }
          else {
            return false;
          }
        }
	  }



      
      
    };
  });
