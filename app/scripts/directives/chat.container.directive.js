'use strict';

angular.module('clinicalApp').directive('chatContainer', ['encounterService', function(encounterService) {
  return {
    scope: {
      encounter: '=',
      count: '='
    },

    templateUrl: 'views/chat.container.html',

    controller: 'EncounterCtrl',

    link: function(scope, elem, attrs, controller) {
      scope.countStart = scope.count;
      scope.updateCount = function(chatText) {
        scope.count = scope.countStart - chatText.length;
      };
      scope.addMessage = function(message) {
        debugger;

        scope.resetChat();
      };
      scope.resetChat = function() {
        scope.chatText = '';
        scope.updateCount(scope.chatText);
      };
    }
  };
}]);