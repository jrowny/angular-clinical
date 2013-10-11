'use strict';

angular.module('clinicalApp').controller('EncounterCtrl', function ($scope, providerService, encounterService, singleEncounter) {
  providerService.search({
    limit: 2000,
    organizationId : '0001194'
  }, function(data) {
    $scope.providers = data.providers;
  });

  encounterService.search({
    actorType: 'PROVIDER_REQUESTING',
    actorIds: '0001194',
    actionStatuses: 'NOT_STARTED',
    actionType: 'AUTO_AUTH',
    limit: 10
  }, function(data) {
    $scope.encounters = data.encounters;
  });

  $scope.createNewAuth = function(encounter) {
    singleEncounter.selectedEncounter = encounter;
  };

  $scope.encounter = singleEncounter.selectedEncounter;
});