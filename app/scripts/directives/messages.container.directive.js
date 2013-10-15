'use strict';

angular.module('clinicalApp').directive('messagesContainer', function() {
  return {
    restrict: 'A',
    scope: {
      messages: '='
    },
    templateUrl: 'views/messages.container.html',

    link: function(scope, elem, attrs) {

    }
  };
});