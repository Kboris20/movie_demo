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
    var movies = [];

    for (var i=0; i<100; i++){
      movies.push({titles: 'element ' +(i+1), comment:'...'+ i});
    }

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      getMovies: function(){
        return movies;
      }
    };
  });
