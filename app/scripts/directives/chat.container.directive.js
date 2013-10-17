'use strict';

angular.module('clinicalApp').directive('chatContainer', function() {
  return {
    scope: {
      encounter: '=',
      count: '='
    },

    templateUrl: 'views/chat.container.html',

    link: function(scope, elem) {
      var chatbox = elem.find('textarea');
      chatbox.bind('keyup',function() {
        var chatCount = $(this).val().length;
        scope.$apply(function() {
          scope.count = 500 - chatCount;
        });
      });
    }
  };
});