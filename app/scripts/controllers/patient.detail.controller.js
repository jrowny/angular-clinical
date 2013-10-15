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

  $scope.getRequestTypeDropDown = function() {
    for(var i=0; i<$scope.dropDownConfigurations.length; i++) {
      if($scope.dropDownConfigurations[i].field === 'requestType'){
        return $scope.dropDownConfigurations[i];
      }
    }
  }

  $scope.getServiceTypeDropDown = function(requestTypeValue) {
    console.log('hello world');
    for(var i=0; i<$scope.dropDownConfigurations.length; i++) {
      if($scope.dropDownConfigurations[i].field === 'requestType' && hasDependency(requestTypeValue, $scope.dropDownConfigurations[i].values)){
        return $scope.dropDownConfigurations[i];
      }
    }
  }

  $scope.test = function() {
    console.log("here I am");
  }

  $scope.hasDependency = function(dependency, dependencyList) {
    for(var i=0; i<dependencyList.length; i++) {
      if(dependencyList[i] === dependency) {
        return true;
      }
      return false;
    }
  }

  formConfiguration.search({}, function(data) {
    $scope.formConfiguration = data;
    $scope.dropDownConfigurations = data.formConfiguration.dropDownConfigurations;
    $scope.requestTypeDropDown = $scope.getRequestTypeDropDown();
  });


  //$scope.encounter = singleEncounter.selectedEncounter;
});