'use strict';

angular.module('clinicalApp', ['ngRoute', 'ngResource']).config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'EncounterCtrl'
  })
  .when('/auth/:id', {
    templateUrl: 'views/new.html',
    controller: "EncounterCtrl"
  })
  .otherwise({
    redirectTo: '/'
  });
});
