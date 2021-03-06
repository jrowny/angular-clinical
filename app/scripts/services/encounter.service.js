'use strict';

angular.module('clinicalApp').factory('encounterService', function ($resource, $rootScope) {
  var EncounterService = $resource('http://localhost:port/v2/encounters/:encounterId', {encounterId:'@encounterId', port: ':8280'}, {
    search: {
      method: 'GET',
      headers: {
        'RemoteUser': 'jhornsby',
        'Content-Type': 'application/json'
      }
    },
    save: {
      headers: {
        'RemoteUser': 'jhornsby',
        'Content-Type': 'application/json'
      }
    }
  });

  var newEncounters = [];
  var filterTerms = {};

  EncounterService.pushNewEncounter = function(encounter) {
    newEncounters.push(encounter);
    $rootScope.$broadcast('newEncountersUpdated');
  };

  EncounterService.getNewEncounters = function() {
    return newEncounters;
  };

  EncounterService.clearNewEncounters = function() {
    newEncounters = [];
  };

  EncounterService.setFilterTerms = function(filterTermsObj) {
    filterTerms = filterTermsObj;
    $rootScope.$broadcast('filterTermsUpdated');
    EncounterService.getFilterTerms(); //filter terms coming in here, must redo the search with them
  };

  EncounterService.getFilterTerms = function() {
    return filterTerms;
  };

  EncounterService.test = function(message) {
    console.log(message);
  };

  return EncounterService;
});