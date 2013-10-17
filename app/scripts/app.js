'use strict';

angular.module('clinicalApp', ['ngRoute', 'ngResource', '$strap.directives']).config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html'
    //controller: 'EncounterCtrl'
  })
  .when('/:id', {
    templateUrl: 'views/patient.detail.html',
    controller: "PatientDetailCtrl"
  })
  .otherwise({
    redirectTo: '/'
  });
});


