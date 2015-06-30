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

    $http.get('http://amc.ig.he-arc.ch:3003/movie/upcoming?language=fr')
      .success(function(data){
        films = data.results;
      }
     );

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },

      getFilms: function(){
        return films;
      },

      saveFilms: function(films){
        localStorage.setItem('mes_films', JSON.stringify(films));
      }
    };
  });
