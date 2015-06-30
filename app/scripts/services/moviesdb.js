'use strict';

/**
 * @ngdoc service
 * @name movieApp.MoviesDB
 * @description
 * # MoviesDB
 * Factory in the movieApp.
 */
angular.module('movieDemoApp')
  .factory('moviesdb', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },

      getFilms: function(){
        var films = JSON.parse(localStorage.getItem ('mes_films')||'[]');
        return films;
      },

      saveFilms: function(films){
        localStorage.setItem('mes_films', JSON.stringify(films));
      }
    };
  });
