'use strict';

angular.module('clinicalApp').controller('EncounterCtrl', function ($scope, encounterService) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  var encounters = encounterService.search({
    limit: 2000,
    organizationId : '0001194'
  });
  $scope.providers = encounters.providers;
});