'use strict';

angular.module('clinicalApp').controller('EncounterCtrl', function ($scope, $routeParams ,providerService, encounterService, singleEncounter, formConfiguration) {
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

  if($routeParams.id){
    encounterService.search({
      encounterId: $routeParams.id
    }, function(data) {
      $scope.encounter = data.encounter;
    });
  }

  formConfiguration.search({}, function(data) {
    $scope.formConfiguration = data;
  });

  $scope.isVisible = false;

  $scope.addNewPatients = function() {
    $scope.encounters = $scope.encounters.concat(encounterService.getNewEncounters());
  }

  $scope.$on('newEncountersUpdated', function(evt, message) {
    $scope.addNewPatients();
    encounterService.clearNewEncounters();
  });

  $scope.createNewAuth = function(encounter) {
    singleEncounter.selectedEncounter = encounter;
  };

  $scope.showChat = true;

  $scope.selectedIndex = -1;

  $scope.selectedEncounter = -1;

  $scope.getSelectedRow = function($index) {
    $scope.selectedIndex = $index;
    $scope.selectedEncounter = $scope.encounters[$scope.selectedIndex];
  };

  $scope.encounter = singleEncounter.selectedEncounter;

  $scope.handleKeypress = function(key) {
    console.log("Key press");
  };
});