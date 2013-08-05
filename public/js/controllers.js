'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!'
    });

  }).
  controller('IndexCtrl', function ($scope, $http) {
    $http.get('api/posts')
      .success(function(data, status, headers, config){
        $scope.posts = data.posts;
      });
  });
    
