'use strict';

angular.module('clinicalApp').directive('chatContainer', function() {
  return {
    scope: {
      encounter: '=',
      ngModel: '='
    },

    controller: 'EncounterCtrl',

    templateUrl: 'views/chat.container.html',

    link: function(scope, elem) {
      var chatbox = elem.find('textarea');
      chatbox.bind('keyup',function() {
        var chatCount = $(this).val().length;
        scope.$apply(function() {
          scope.ngModel = 500 - chatCount;
        });
      });
    }
  };
});