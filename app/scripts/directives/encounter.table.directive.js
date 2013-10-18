'use strict';

angular.module('clinicalApp').directive('encounterTableInsert', ['encounterService', function(encounterService) {
  return {
    restrict: 'A',
    templateUrl: 'views/encounter.table.html',
    scope: {
      encounters : "=",
      search: "="
    },

    link: function(scope, elem, attrs) {

    }
  };
}]);