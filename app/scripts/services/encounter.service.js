'use strict';

angular.module('clinicalApp').factory('encounterService', function ($resource) {
  var EncounterService = $resource('http://localhost:port/v1/express-providers/:providerId', {providerId:'@id', port: ':8280'}, {
    search: {
      method: 'GET',
      headers: {
        'RemoteUser': 'jhornsby',
        'Content-Type': 'application/json'
      }
    }
  });
  return EncounterService;
});