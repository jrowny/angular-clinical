'use strict';

angular.module('clinicalApp').controller('EncounterCtrl', function ($scope, encounterService) {
  encounterService.search({
    limit: 2000,
    organizationId : '0001194'
  }, function(data) {
    $scope.providers = data.providers;
  });
});