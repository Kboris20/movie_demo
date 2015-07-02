'use strict';

/**
 * @ngdoc function
 * @name movieApp.controller:FavorisCtrl
 * @description
 * # FavorisCtrl
 * Controller of the movieDemoApp
 */
angular.module('movieDemoApp')
  .controller('FavorisCtrl', function ($scope, moviesdb, $http, $rootScope) {
    $http.get('http://amc.ig.he-arc.ch:3003/movie/upcoming?language=fr')
    .success(function(data) {
      $scope.movies = data.results;

      $scope.favorisId = moviesdb.getFavoris();

      $scope.favoris = [];

      var allMovies = $scope.movies;
      for (var i=0; i<allMovies.length; i++) {
        if($scope.favorisId.indexOf(allMovies[i].id) > -1) {
          $scope.favoris.push(allMovies[i]);
        }
      }
      
      $scope.deleteFavori = function (movie) {
        moviesdb.deleteFavori(movie.id);
        $scope.favoris.splice($scope.favoris.indexOf(movie), 1);
	  }

      $scope.isId = function (movieId) {
        moviesdb.isId(movieId);
	  }
    })


     $rootScope.bgImage="";
  });
