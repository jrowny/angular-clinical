'use strict';

angular.module('clinicalApp').factory('formConfiguration', function ($resource) {
  var ProviderService = $resource('http://localhost:port/v1/form-configuration/encounter-auth/:encounterAuth', {encounterAuth:'@id', port: ':8280'}, {
    search: {
      method: 'GET',
      headers: {
        'RemoteUser': 'jhornsby',
        'Content-Type': 'application/json'
      }
    }
  });
  return ProviderService;
});