'use strict';

angular.module('clinicalApp').directive('chatContainer', function() {
  return {
    scope: {
      encounter: '=',
      count: '='
    },

    templateUrl: 'views/chat.container.html',

    controller: 'EncounterCtrl',

    link: function(scope) {
      scope.countStart = scope.count;
      scope.updateCount = function(chatCount) {
        scope.count = scope.countStart - chatCount.length;
      };
    }
  };
});