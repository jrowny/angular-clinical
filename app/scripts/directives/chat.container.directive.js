'use strict';

angular.module('clinicalApp').directive('chatContainer', function() {
  return {
    restrict: 'A',
    scope: {
      encounter: '='
    },
    templateUrl: 'views/chat.container.html',

    link: function(scope, elem, attrs) {

    }
  };
});