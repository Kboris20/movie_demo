'use strict';

/**
 * @ngdoc function
 * @name movieDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieDemoApp
 */
angular.module('movieDemoApp')
  .controller('MainCtrl', function ($scope, moviesdb, $rootScope, $http) {

  	$scope.moviesdb = moviesdb;

	$rootScope.moviesdb=moviesdb;
	
	$rootScope.bgImage="";

  var desfilm = $scope.moviesdb.getFilms();
  $scope.unfilm = desfilm[0];


    $scope.nbAffiche=10;
	$scope.debut=0;

	$scope.monClick = function(){
		moviesdb.rechercherFilm($scope.titre);
		$scope.moviesdb = moviesdb;
		$scope.titre="";
		};
	
	$scope.active = true;
  });
