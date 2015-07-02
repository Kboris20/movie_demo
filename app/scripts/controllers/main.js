'use strict';

/**
 * @ngdoc function
 * @name movieDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieDemoApp
 */
angular.module('movieDemoApp')
  .controller('MainCtrl', function ($scope, moviesdb, $rootScope, $http, $routeParams) {
	
	moviesdb.chargerFilms();
	var titre = null;
	var titre = $routeParams.query; 
  	$scope.moviesdb = moviesdb;




	$rootScope.refresh = function(){
		moviesdb.chargerFilms();
		$scope.moviesdb = moviesdb;
		$rootScope.titre="";
		
	}
	
	$rootScope.bgImage="";

  var desfilm = $scope.moviesdb.getFilms();
  $scope.unfilm = desfilm[0];


   
	if (titre != null){
		moviesdb.rechercherFilm(titre);
		$scope.moviesdb = moviesdb;
		};
  })
