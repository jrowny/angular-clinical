'use strict';

angular.module('clinicalApp').filter('patientNameFirstLast', function() {
  return function(patient) {
    return patient.firstName + ' ' + patient.lastName;
  };
});

angular.module('clinicalApp').filter('patientDob', function() {
  return function(patient) {
    return patient.dateOfBirth;
  };
});

angular.module('clinicalApp').filter('patientPrimaryPayer', function() {
  return function(actors) {
    var primaryName = '';
    actors.forEach(function(actor){
      if(actor.type === 'PAYER_PRIMARY') {
        primaryName = actor.name;
      }
    });
    return primaryName;
  };
});

angular.module('clinicalApp').filter('statusName', function() {
  return function(actions) {
    var statusName = '';
    actions.forEach(function(action) {
      if(action.type === 'AUTO_AUTH') {
        statusName = action.status;
      }
    });
    return statusName;
  };
});

angular.module('clinicalApp').filter('statusDate', function() {
  return function(actions) {
    var statusName = '';
    actions.forEach(function(action) {
      if(action.type === 'AUTO_AUTH') {
        statusName = action.date;
      }
    });
    return statusName;
  };
});