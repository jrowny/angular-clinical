'use strict';

angular.module('clinicalApp').factory('encounterService', function ($resource, $rootScope) {
  var EncounterService = $resource('http://localhost:port/v2/encounters/:encounterId', {encounterId:'@id', port: ':8280'}, {
    search: {
      method: 'GET',
      headers: {
        'RemoteUser': 'jhornsby',
        'Content-Type': 'application/json'
      }
    }
  });

  var newEncounters = [];

  EncounterService.pushNewEncounter = function(encounter) {
    newEncounters.push(encounter);
    $rootScope.$broadcast('newEncountersUpdated');
  };

  EncounterService.getNewEncounters = function() {
    return newEncounters;
  }

  EncounterService.clearNewEncounters = function() {
    newEncounters = [];
  }

  return EncounterService;
});