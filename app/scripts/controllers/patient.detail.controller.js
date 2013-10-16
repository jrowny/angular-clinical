'use strict';

angular.module('clinicalApp').controller('PatientDetailCtrl', function ($scope, $routeParams ,providerService, encounterService, singleEncounter, formConfiguration) {
  

  
  if($routeParams.id){
    encounterService.search({
      encounterId: $routeParams.id
    }, function(data) {
      $scope.encounter = data.encounter;
    });
  }

  providerService.search({
    limit: 2000,
    organizationId : '0001194'
  }, function(data) {
    $scope.providers = data.providers;
  });

 


  //$scope.encounter = singleEncounter.selectedEncounter;
});