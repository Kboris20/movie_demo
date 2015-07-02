'use strict';

/**
 * @ngdoc function
 * @name movieDemoApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the movieDemoApp
 */
angular.module('movieDemoApp')
  .controller('MovieCtrl', function ($scope, $routeParams, moviesdb, $http, $rootScope) {
  
  $rootScope.titre="";
  $rootScope.moviesdb = moviesdb
   var id = $routeParams.id;

     $http.get('http://amc.ig.he-arc.ch:3003/movie/'+id+'?append_to_response=similar,releases,credits&language=fr')
      .success(function(data){
        $scope.film = data;
        $rootScope.bgImage = $scope.film.backdrop_path;
        
         $scope.pays=[];
         var countries = $scope.film.releases.countries;

         for (var i = 0; i < countries.length; i++){
         
          if(countries[i].iso_3166_1 == 'DE' || countries[i].iso_3166_1 == 'FR' || countries[i].iso_3166_1  == 'US'){
           $scope.pays.push(countries[i]);
         }}


         $scope.acteurs =[];
         var actors = $scope.film.credits.cast;
          
         for (var i = 0; i < 6; i++){
         
           $scope.acteurs.push(actors[i]);
         }

         $scope.realisateur;
         var realisators = $scope.film.credits.crew;
          
         for (var i = 0; i < realisators.length; i++){
         
          if(realisators[i].job == "Editor"){
            $scope.realisateur = realisators[i];
          }
         }

    

      });

  });
