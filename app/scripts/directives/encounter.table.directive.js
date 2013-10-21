'use strict';

angular.module('clinicalApp').directive('encounterTableInsert', ['encounterService', function(encounterService) {
  return {
    restrict: 'A',
    templateUrl: 'views/encounter.table.html',
    scope: {
      search: '='
    },

    controller: 'EncounterCtrl',

    link: function(scope) {
      scope.getSelectedRow = function(index) {
        scope.$broadcast('selectedRow', { rowIndex: index });
      };
    }
  };
}]);