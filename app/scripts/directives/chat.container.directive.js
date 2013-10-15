'use strict';

angular.module('clinicalApp').directive('chatContainer', function() {
  return {
    restrict: 'A',
    scope: {
      encounter: '=',
      count: '='
    },
    templateUrl: 'views/chat.container.html',

    link: function(scope, elem, attrs) {
      scope.count = 500;
    }
  };
});